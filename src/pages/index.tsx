import type { NextPage, GetStaticProps } from 'next'
import Advantages from 'ui/partials/index/_Advantages';
import FrequentQuestions from 'ui/partials/index/_FrequentQuestions';
import Presentation from 'ui/partials/index/_Presentation';

export const getStaticProps: GetStaticProps = async () => {
  return{
    props: {
      title: 'home',
    },
  };
};

const Index: NextPage = () => {
  return (
    <div>
      <Presentation />
      <Advantages />
      <FrequentQuestions />
    </div>
  );
};

export default Index;
