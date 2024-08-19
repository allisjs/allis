import { EditOutlined, GithubFilled } from '@ant-design/icons';
import { Divider, Space, Typography } from 'antd';
import { useResponsive } from 'antd-style';
import React, { FC, memo, ReactNode } from 'react';
import { Flexbox } from 'react-layout-kit';

import Code from 'dumi-theme-antd-style/dist/components/CodeSnippet';

import { useStyles } from 'dumi-theme-antd-style/dist/components/ApiHeader/style';
import { ApiHeaderProps } from 'dumi-theme-antd-style/src';

export interface ApiTitleProps extends ApiHeaderProps {
  title: string;
  description?: string;
  sourceUrl?: string;
  docUrl?: string;
  serviceList?: ServiceItem[];
  componentName?: string;
  pkg?: string;
}

export interface ServiceItem {
  label: string;
  icon: ReactNode;
  children: string;
  url: string;
}

export const ApiHeader: FC<ApiTitleProps> = memo(
  ({
    title,
    componentName,
    description,
    pkg,
    sourceUrl,
    docUrl,
    serviceList = [],
  }) => {
    const { styles } = useStyles();
    const { mobile } = useResponsive();

    if (!componentName) return null;

    const items = [
      sourceUrl && {
        icon: <GithubFilled />,
        children: '查看源码',
        url: sourceUrl,
      },
      docUrl && {
        icon: <EditOutlined />,
        children: '编辑文档',
        url: docUrl,
      },
    ].filter((i) => i) as ServiceItem[];

    const importStr = `import is${componentName
      .slice(0, 1)
      .toUpperCase()}${componentName.slice(1)} from '${pkg}/${componentName}';`;

    return (
      <Flexbox>
        <Typography.Title className={styles.title}>{title}</Typography.Title>
        {description && (
          <div>
            <Typography.Text type={'secondary'} className={styles.desc}>
              {description}
            </Typography.Text>
          </div>
        )}
        <Flexbox style={{ marginTop: 16 }} gap={mobile ? 16 : 24}>
          <Flexbox horizontal={!mobile} gap={mobile ? 12 : 0}>
            <Typography.Text
              className={styles.label}
              type={'secondary'}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              引入方法
            </Typography.Text>
            <Code>{importStr}</Code>
          </Flexbox>
          <Divider dashed style={{ margin: '2px 0' }} />
          <Flexbox
            horizontal={!mobile}
            gap={mobile ? 24 : 0}
            distribution={'space-between'}
          >
            <Space split={<Divider type={'vertical'} />} wrap>
              {serviceList.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target={'_blank'}
                  rel="noreferrer"
                  title={item.label}
                >
                  <Flexbox
                    horizontal
                    align={'center'}
                    gap={8}
                    className={styles.text}
                  >
                    <>{item.icon}</>
                    <>{item.children}</>
                  </Flexbox>
                </a>
              ))}
            </Space>

            <Space
              split={<Divider type={'vertical'} />}
              className={styles.meta}
            >
              {items.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <Flexbox
                    horizontal
                    align={'center'}
                    gap={8}
                    className={styles.text}
                  >
                    <>{item.icon}</>
                    <>{item.children}</>
                  </Flexbox>
                </a>
              ))}
            </Space>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    );
  },
);
