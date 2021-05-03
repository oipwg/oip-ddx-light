# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2021-05-02
### Added
 - ArticleViewer
    - renders article preview txt looking at `TMP_TEXT_IS_PREVIEW:tmpl_769D8FBC`
    - displays the paid content after an autobuy
    - renders title, byline, writer, and image, and obviously text body
    - text fade out for article preview
    
 - eslint
    - `npm run lint` will run now on pre-push (currently only lints src folder)
    
### Changed
 - file structure
    - core code now lives in src/components (nextjs code still must live outside src)
