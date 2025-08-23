import CardArticle from '@/components/CardArticle/CardArticle';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

import styles from './ArticleList.module.css';

export default function ArticleList() {
    return (
        <>
            <SectionTitle/>
            <div className={styles.articleListContainer}>
                <CardArticle
                    image='/image1.png'
                    title='O que é linguagem de programação? Conheça as principais'
                    description='Uma das mais populares vertentes da tecnologia da informação, a área de...'
                />
                <CardArticle
                    image='/image2.png'
                    title='Python: por que a linguagem é tão usada para Data Science e finanças?'
                    description='O mundo da programação conta com algumas opções de linguagem para...'
                />
                <CardArticle
                    image='/image3.png'
                    title='GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários'
                    description='O popular serviço de repositório de código GitHub foi adquirido pela...'
                />
                <CardArticle
                    image='/image4.png'
                    title='15 comandos no GIT que os desenvolvedores precisam saber'
                    description='Dominar os comandos GIT é uma habilidade que se conquista com...'
                />
                <CardArticle
                    image='/image5.png'
                    title='GIT e GitHub: o que são e quais as diferenças entre eles?'
                    description='Git e GibHub são dois softwares de controle de versão essenciais para...'
                />
                <CardArticle
                    image='/image6.png'
                    title='GitHub Copilot ganha integração com GPT-4 e interface conversacional'
                    description='O GitHub Copilot, ferramenta de desenvolvimento baseada em IA...'
                />
            </div>
        </>
    );
}