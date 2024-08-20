import { defineConfig } from 'dumi';
import type { SiteThemeConfig } from 'dumi-theme-antd-style';
import { repository, name } from './package.json';

const themeConfig: SiteThemeConfig = {
  socialLinks: { github: repository },
  apiHeader: {
    pkg: name,
    sourceUrl: `{github}/tree/master/src/components/{atomId}/index.tsx`,
    docUrl: `{github}/tree/master/example/docs/components/{atomId}.{locale}.md`,
    match: ['/docs', '/zh-CN/docs'],
  },
  footer: 'iscorrect',
  footerConfig: {
    columns: [],
  },
};

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'iscorrect',
    logo: '/favicon.svg',
    ...themeConfig,
  },
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文' },
  ],
  mako: {},
  sitemap: {
    hostname: 'https://iscorrect.jsdev.top'
  }
});
