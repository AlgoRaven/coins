import fetch from 'node-fetch'

if (!globalThis.fetch) {
	;(globalThis as any).fetch = fetch
}

const CONFIG = {
	OWNER: 'AlgoRaven',
	REPO: 'raven-coins',
	BRANCH: 'main',
	USER_AGENT: 'algoraven.com',
}

const UNKNOWN = 'UNKNOWN'
const BASE_URL = `https://raw.githubusercontent.com/${CONFIG.OWNER}/${CONFIG.REPO}/${CONFIG.BRANCH}/images/`

const parseCoinSymbol = (coin: string) => {
	if (coin.length === 0) {
		return coin
	}
	return coin.split('-')[0].toUpperCase()
}

const getUrl = (symbol: string) => {
	return `${BASE_URL}${parseCoinSymbol(symbol)}.png`
}

export const getCoinImage = async (coinSymbol: string): Promise<string> => {
	const url = getUrl(coinSymbol)
	try {
		const res = await fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/vnd.github.v3.raw',
				'User-Agent': CONFIG.USER_AGENT,
			},
		})
		if (res.ok) {
			return url
		}
	} catch {}
	return getUrl(UNKNOWN)
}
