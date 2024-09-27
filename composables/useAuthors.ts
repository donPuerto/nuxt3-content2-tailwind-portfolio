import type { Post, Author } from '~/types';

export function useAuthors() {
  const getAuthors = (authorsData: Post['authors']): Author[] => {
    if (typeof authorsData === 'string') {
      return [{ name: authorsData, avatar: '', slug: '' }];
    }
    else if (Array.isArray(authorsData)) {
      return authorsData;
    }
    else if (typeof authorsData === 'object') {
      return [authorsData];
    }
    return [];
  };

  return {
    getAuthors,
  };
}
