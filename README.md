<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">

<h3 align="center">react-i18next-validator</h3>

  <p align="center">
    react-i18next validator. Validate there are no duplicate keys in translation files. Validate there are no missing keys in code that are provided in translation files. Validate there are no missing keys in translation files that are provided in code files.
    <br />
    <a href="https://vladavox.github.io/react-i18next-validator/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/vladavoX/react-i18next-validator/issues">Report Bug</a>
    ·
    <a href="https://github.com/vladavoX/react-i18next-validator/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Stop cluttering translation.json files with keys that are no longer used or duplicate values. Make sure you don't forget to add a key to the translation file when you add it to the code. Make sure you don't forget to remove a key from the translation file when you remove it from the code.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Install NPM package

```sh
npm install react-i18next-validator
```

2. Create config file in root directory `ri18next-v.config.json`

```json
{
	"directory": "./public/locales/", // path to translation locales directory
	"src": "./src/" // path to source code directory
}
```

3. Add script to `package.json`

```json
"scripts": {
  "ri18next-v": "ri18next-validator"
}
```

4. Run script

```sh
npm run ri18next-v
```

5. You can add additional options to the config

```json
{
	"errorLevel": "error", // error, warn, info
	"regex": [], // string[] array of regex to look for in code files to match translation keys
	"ignoreKeys": [] // string[] array of keys to ignore
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/vladavoX/react-i18next-validator.svg?style=for-the-badge
[contributors-url]: https://github.com/vladavoX/react-i18next-validator/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/vladavoX/react-i18next-validator.svg?style=for-the-badge
[forks-url]: https://github.com/vladavoX/react-i18next-validator/network/members
[stars-shield]: https://img.shields.io/github/stars/vladavoX/react-i18next-validator.svg?style=for-the-badge
[stars-url]: https://github.com/vladavoX/react-i18next-validator/stargazers
[issues-shield]: https://img.shields.io/github/issues/vladavoX/react-i18next-validator.svg?style=for-the-badge
[issues-url]: https://github.com/vladavoX/react-i18next-validator/issues
[license-shield]: https://img.shields.io/github/license/vladavoX/react-i18next-validator.svg?style=for-the-badge
[license-url]: https://github.com/vladavoX/react-i18next-validator/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/va99
