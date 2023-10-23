# Field Hugo Site

This repository contains the source code for the Field Hugo Site. It is a static website designed for marketing purposes. The website is built using Hugo, a fast and flexible static site generator.

## Table of Contents

- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Formatting](#formatting)

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/field-app/hugo-site.git
cd hugo-site
```

2. Install project dependencies:

```bash
npm i
```

Now you are ready to use the provided scripts to develop and build the website.

## Scripts

This project includes several NPM scripts for common tasks:

- `npm run dev`: Starts a development server. It concurrently watches for changes in Hugo content and Tailwind CSS.
- `npm run build`: Builds the website for production.s

## Formatting

We maintain code formatting using Prettier with specific plugins. You can check and format the code using the following scripts:

- `npm run format:check`: Checks code formatting.
- `npm run format:all`: Formats the code.
