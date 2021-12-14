import Head from 'next/head';
import Layout from '@components/Layout';
import { box, singlePostWrapper } from '@styles/common';
import PriceRange from '@components/Enquiry/PrinceRange';
import PersonalInfo from '@components/Enquiry/PersonalInfo';
import ProjectDetails from '@components/Enquiry/ProjectDetails';

import AcceptPolicy from '@components/Enquiry/AcceptPolicy';
import { css } from 'stitches.config';
import Link from '@components/common/Link';
import { heading } from '@styles/typography';
import Label from '@components/Enquiry/Label';

function Enquiry() {
  const button = css({
    margin: '0',
    border: '0',
    backgroundColor: '$brand_main',
    color: '$neutral6',
    padding: '1rem 2rem',
    borderRadius: '999px',
    cursor: 'pointer',
    marginTop: '1rem',
  });
  return (
    <div>
      <Head>
        <title>Index</title>
      </Head>
      <Layout>
        <div className={singlePostWrapper({ css: { margin: '3.2rem auto' } })}>
          <div className={box({ css: { marginBottom: '2rem' } })}>
            <h1 className={heading({ type: 'h1' })}>
              Interested?
              <br /> Let’s talk!
            </h1>
            <p>
              Just fill this simple form in and i will contact you promptly <br /> to discuss your
              project. Hate forms? Drop me a line at <br /> <Link href="#">contact@idir.com</Link>
            </p>
          </div>
          <PersonalInfo />
          <PriceRange />
          <ServicesNeeded />
          <ProjectDetails />
          <AcceptPolicy />
          <div className={box({ css: { marginTop: '1.2rem' } })}>
            <input className={button()} type="submit" value="Send Request" />
          </div>
        </div>
      </Layout>
    </div>
  );
}

function ServicesNeeded() {
  const container = css({
    display: 'grid',
    gridAutoColumns: 'auto',
    gridTemplateRows: 'auto auto',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: '1rem',
    margin: '1.2rem 0 3rem 0',
  });

  return (
    <div>
      <label className={heading({ type: 'h4' })}>Services needed</label>
      <div className={container()}>
        <Label id="web">
          <input id="web" type="checkbox" />
          <span className={heading({ type: 'h5', css: { margin: '0' } })}>Web Development</span>
        </Label>
        <Label id="mobile">
          <input id="mobile" type="checkbox" />
          <span className={heading({ type: 'h5', css: { margin: '0' } })}>Mobile Development</span>
        </Label>
        <Label id="support">
          <input id="support" type="checkbox" />
          <span className={heading({ type: 'h5', css: { margin: '0' } })}>
            Maintenance & Support
          </span>
        </Label>
        <Label id="technical">
          <input id="technical" type="checkbox" />
          <span className={heading({ type: 'h5', css: { margin: '0' } })}>
            Technical Consultancy
          </span>
        </Label>
        <Label id="other">
          <input id="other" type="checkbox" />
          <span className={heading({ type: 'h5', css: { margin: '0' } })}>Other Services</span>
        </Label>
      </div>
    </div>
  );
}

export default Enquiry;
