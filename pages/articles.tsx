import * as React from 'react';
import axios from 'axios';

import Page from '@components/page';
import Header from '@components/header';
import Layout from '@components/layout';
import { List } from '@components/List';
import { ListItem } from '@components/ListItem';
import { META_DESCRIPTION } from '@lib/constants';

export default function Articles({ lists }) {
  const meta = {
    title: '女人迷熱門文章列表',
    image: 'https://virtual-event-starter-kit-seven-eta-67.vercel.app/shuan.jpg',
    description: META_DESCRIPTION
  };
  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Trending Articles" description={meta.description} />
        <List spacing="12">
          {lists.map(a => (
            <ListItem key={a.id} {...a} />
          ))}
        </List>
      </Layout>
    </Page>
  );
}

export const getStaticProps = async () => {
  const { data } = await axios.get('https://api.womany.net/articles/list?order=hot');
  return {
    props: {
      lists: data.articles || []
    }
  };
};
