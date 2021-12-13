# raven-coins

[<img src="https://badge.fury.io/js/%40raven-crypto%2Fraven-coins.svg" />](https://www.npmjs.com/package/@raven-crypto/raven-coins)

Cryptocurrency logo CDN.

## Contribution

Steps for contributing:
1. Create a feature branch
2. Push your new icons to your feature branch in the `/images` directory.
3. Create a Pull Request on GitHub

## Publishing to NPM

Pushes to `main` are automatically published to NPM. Please use caution and consult with the team before pushing to `main`.

## Using this Libary

1. Install: `yarn add @raven-crypto/raven-coins`

2. Import the `getCoinImage` function as follows.
    ```
    import { getCoinImage } from '@raven-crypto/raven-coins'`
    ```

3. Call the function with your desired coin.
    ```
    const coinImageUrl = getCoinImage('DOGE')
    ```
