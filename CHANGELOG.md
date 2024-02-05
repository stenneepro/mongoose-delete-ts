# Changelog

## [1.1.0](https://github.com/stenneepro/mongoose-soft-delete/compare/mongoose-soft-delete-v1.0.6...mongoose-soft-delete-v1.1.0) (2024-02-05)


### Features

* add custom schema options to deleted ([f7110b5](https://github.com/stenneepro/mongoose-soft-delete/commit/f7110b54230c30781476e8f8484d17979242aef2))
* Bump Mongoose from 8.0.4 to 8.1.1 ([5cb58c1](https://github.com/stenneepro/mongoose-soft-delete/commit/5cb58c1e3a254aeba2ed63a3938adc22f1ccfae7))
* Change package name ([79fd378](https://github.com/stenneepro/mongoose-soft-delete/commit/79fd378bcd4a6eade4ad202b84642c83c7f6991c))
* Change package name ([c2fc8d3](https://github.com/stenneepro/mongoose-soft-delete/commit/c2fc8d36c563ac6092ea27b95dd43f2f30d8e15d))
* export Document, Model and Option types from index ([94eecb6](https://github.com/stenneepro/mongoose-soft-delete/commit/94eecb6b9d34fa653053fc3e6d4f693045c1a9f5))
* Update GitHub test action ([49f64b9](https://github.com/stenneepro/mongoose-soft-delete/commit/49f64b90b92256b539f1933ad5f98819e9d158f9))
* Update types, tests ([d486f60](https://github.com/stenneepro/mongoose-soft-delete/commit/d486f6075b36935a02a636bfdf8de779c4d2c984))


### Bug Fixes

* add missing export ([ea34a01](https://github.com/stenneepro/mongoose-soft-delete/commit/ea34a01c8112babecd6dcf5bd9462c361e3d5b03))
* change return type for query helpers ([c4384be](https://github.com/stenneepro/mongoose-soft-delete/commit/c4384bef999c1c0c5856fd860f557d1ea049bdb7))
* change to HydratedDocument to match mongoose ([f94f96b](https://github.com/stenneepro/mongoose-soft-delete/commit/f94f96b03ccc7158ad7f6059e3cf63fa29386d95))
* Fix release-please action ([2741991](https://github.com/stenneepro/mongoose-soft-delete/commit/2741991dcafad6f25988d7ff4f8d133cec55914d))
* only add alias if name is different ([5c5e312](https://github.com/stenneepro/mongoose-soft-delete/commit/5c5e31200a98e0797a026d6e77e40d2a585e0431))
* security bump of dev dependency ([2aedfc3](https://github.com/stenneepro/mongoose-soft-delete/commit/2aedfc31fd626df01275bc0a5a5b19f3daa9a35f))
* **types:** make deleted attributes optional ([0c5925e](https://github.com/stenneepro/mongoose-soft-delete/commit/0c5925ef967bb4985f814993a8ef60d7dada74d4))
* **types:** remove default user type ([80f54e3](https://github.com/stenneepro/mongoose-soft-delete/commit/80f54e364985d35d21c8f776d87762ef60aaa7de))
* update github actions ([e208767](https://github.com/stenneepro/mongoose-soft-delete/commit/e2087677e5f578e9ccf7bb23f0046259fa254bbb))

## [v1.0.0]
> February 2, 2024

- Initial version
- Add `deleted` (true-false) key on document
- Add `deletedAt` key to store time of deletion
- Add `deletedBy` key to record who deleted document
- Restore deleted documents, `restoreOne()` method
