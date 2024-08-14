import type { Struct, Schema } from '@strapi/strapi';

export interface TestTest extends Struct.ComponentSchema {
  collectionName: 'components_test_tests';
  info: {
    displayName: 'test';
    icon: 'server';
  };
  attributes: {
    test: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'test.test': TestTest;
    }
  }
}
