import React from 'react';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { box } from '@components/MDXComponents/box';
import { text } from '@components/MDXComponents/text';
import { input } from '@components/MDXComponents/input';
import { button } from '@components/MDXComponents/button';

export function CardPlayground(props) {
  const headingRef = React.useRef<HTMLInputElement>(null);
  const [heading, setHeading] = React.useState('Heading');
  const subHeadingRef = React.useRef<HTMLInputElement>(null);
  const [subHeading, setSubHeading] = React.useState('Subheading');
  const titleRef = React.useRef<HTMLInputElement>(null);
  const [title, setTitle] = React.useState('Playground 🎢');
  const domainRef = React.useRef<HTMLInputElement>(null);
  const [domain, setDomain] = React.useState('doma.in');

  const api = 'https://i.microlink.io/';
  const cardUrl = `https://cards.microlink.io/?preset=pedro&heading=${heading}&subHeading=${subHeading}&title=${title}&domain=${domain}`;
  const image = `${api}${encodeURIComponent(cardUrl)}`;

  return (
    <div
      className={box({
        p: '$3',
        bc: '$white',
        '@bp1': {
          p: '$4',
        },
      })}
    >
      <h3
        className={text({
          size: '4',
          css: {
            color: '$black',
            mb: '$4',
            textAlign: 'center',
          },
        })}
      >
        Mini Microlink Card Playground
      </h3>
      <form
        className={box({
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
          alignItems: 'center',
          mb: '$4',
          mx: 'auto',
        })}
        onSubmit={(e) => {
          e.preventDefault();
          setHeading(headingRef.current.value);
          setSubHeading(subHeadingRef.current.value);
          setTitle(titleRef.current.value);
          setDomain(domainRef.current.value);
        }}
      >
        <label className={box({ mb: '$2', pr: '$2', display: 'block', flex: '1 1 50%' })}>
          <span className={text({ size: '2', css: { color: '$gray', lineHeight: '$3' } })}>
            Heading
          </span>
          <input className={input()} ref={headingRef} defaultValue={heading} />
        </label>
        <label className={box({ mb: '$2', pl: '$2', display: 'block', flex: '1 1 50%' })}>
          <span className={text({ size: '2', css: { color: '$gray', lineHeight: '$3' } })}>
            Sub heading
          </span>
          <input className={input()} ref={subHeadingRef} defaultValue={subHeading} />
        </label>
        <label className={box({ mb: '$2', pr: '$2', display: 'block', flex: '1 1 50%' })}>
          <span className={text({ size: '2', css: { color: '$gray', lineHeight: '$3' } })}>
            Title
          </span>
          <input className={input()} ref={titleRef} defaultValue={title} />
        </label>
        <label className={box({ mb: '$2', pl: '$2', display: 'block', flex: '1 1 50%' })}>
          <span className={text({ size: '2', css: { color: '$gray', lineHeight: '$3' } })}>
            Domain
          </span>
          <input className={input()} ref={domainRef} defaultValue={domain} />
        </label>

        <button className={button({ css: { mt: '$3', mx: 'auto' } })}>Generate</button>
      </form>

      <div className={box({ my: '$4', bc: 'yellow' })}>
        <AspectRatio ratio={16 / 9}>
          <img
            className={box({
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              verticalAlign: 'middle',
              boxShadow: '5px 3px 10px 10px rgba(0, 0, 0, 0.05)',
            })}
            src={image}
            alt={title}
          />
        </AspectRatio>
      </div>

      <p className={text({ css: { color: '$black' } })}>
        Here's the generated URL based on the queries above:
      </p>

      <div
        className={box({
          mt: '$3',
          p: '$2',
          bc: '$gray',
          color: '$white',
          fontFamily: '$mono',
          fontSize: '$3',
          lineHeight: '$3',
          overflow: 'auto',
        })}
      >
        <pre className="language-jsx">{image}</pre>
      </div>
    </div>
  );
}
