import React from 'react';

type Props = {
  title: string;
  content: string;
  commentQty: number;
  tags: string[];

  // 8 - Enum
  category: Category;
};

export enum Category {
  JS = 'JavaScript',
  TS = 'TypeScript',
  P = 'Python',
}

function Destructuring({ title, content, commentQty, tags, category }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
      <h4>Categoria: {category}</h4>
    </div>
  );
}

export default Destructuring;
