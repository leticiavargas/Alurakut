import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';

import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations';

const ProfileSidebar = ({githubUser}) => {
  return (
    <Box>
      <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px'}}  />
    </Box>
  );
};


export default function Home() {

  const githubUser = 'leticiavargas';
  const favoritePerson = ['jeferson-checkplant', 'pedrolucasp', 'robsonfleal', 'johnwmcarneiro', 'felipemathies', 'rspedrini'];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser}  />
        </div>
        <div className="welcomeArea" style={{gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper> 
            <h2 className="smalltitle">Pessoas ({favoritePerson.length})</h2>
            <ul>
              {
                favoritePerson.map((person) => {
                  return(
                    <li>
                      <a href={`/users/${person}`} key={person}>
                        <img src={`https://github.com/${person}.png`} />
                        <span>{person}</span> 
                      </a>
                    </li>
                    
                  );
                })
              
              }
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
}
