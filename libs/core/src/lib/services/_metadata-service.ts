import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { PageMetadata } from '../models';

@Injectable()
export class MetadataService {

  private _defaultMetadata: PageMetadata = {} as PageMetadata;

  constructor(private metaTagService: Meta, private titleService: Title) {
  }

  public set defaultMetadata(_meta: PageMetadata) {
    this._defaultMetadata = _meta;
    this.updateMetadata({});
  }

  public updateMetadata(metadata: Partial<PageMetadata>, index = true): void {
    const pageMetadata: PageMetadata = { ...this._defaultMetadata, ...metadata };

    if (Object.keys(pageMetadata).length < 1) {
      console.error(`Couldn't update meta tags`);
      return;
    }

    const metatags: MetaDefinition[] = this.generateMetaDefinitions(pageMetadata);

    this.metaTagService.addTags([
      ...metatags,
      { property: 'og:url', content: window.location.href },
      { name: 'robots', content: index ? 'index, follow' : 'noindex' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' }
    ]);

    this.titleService.setTitle(pageMetadata.title);
  }

  private generateMetaDefinitions(metadata: PageMetadata): MetaDefinition[] {
    return [
      { name: 'title', content: metadata.title },
      { property: 'og:title', content: metadata.title },

      { name: 'description', content: metadata.description },
      { property: 'og:description', content: metadata.description },

      { name: 'author', content: metadata.author },
      { property: 'og:author', content: metadata.author },

      { name: 'keywords', content: metadata.keywords.join(', ') },

      { property: 'og:type', content: metadata.type }
    ];
  }
}
