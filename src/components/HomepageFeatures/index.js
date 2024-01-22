import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Crafted Wisdom',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Inspired by Craftsmanship
        Just as a skilled contractor relies on a trusted set of tools, this Developer Toolkit
        is a testament to craftsmanship in the vast realm of computer science. 
      </>
    ),
  },
  {
    title: 'Dynamic Knowledge Hub',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Transforming Insights into Action
        This DevToolkit is more than a repository—it's a dynamic hub where insights are
        transformed into actionable knowledge.
      </>
    ),
  },
  {
    title: 'Evolving with Expertise',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Embrace continuous learning and growth. This documentation is a living
        resource that evolves with expertise to remain relevant and explore emerging technologies.
      </>
    ),
  },

];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
