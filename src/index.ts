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
	return coin.toUpperCase()
}

const getUrl = (symbol: string) => {
	return `${BASE_URL}${parseCoinSymbol(symbol)}.png`
}

/**
 * Get the image url for a coin from GitHub.
 * @param coinSymbol The symbol to fetch the image for.
 * @param skipCheck If true, a fallback image is not returned if not found.
 * @returns A string image URL.
 */
export const getCoinImage = async (coinSymbol: string, skipCheck: boolean = false): Promise<string> => {
	const url = getUrl(coinSymbol)
	if (skipCheck) {
		return url
	}
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
