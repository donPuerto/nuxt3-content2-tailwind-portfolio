import type { Post, Author } from '~/types';

export function useAuthor() {
  const getAuthor = (authorData: Post['authors']): Author | null => {
    if (typeof authorData === 'string') {
      return { name: authorData, avatar: '', slug: authorData.toLowerCase().replace(/\s+/g, '-') };
    }
    else if (Array.isArray(authorData) && authorData.length > 0) {
      return authorData[0];
    }
    else if (typeof authorData === 'object' && authorData !== null) {
      return authorData;
    }
    return null;
  };

  return {
    getAuthor,
  };
}
