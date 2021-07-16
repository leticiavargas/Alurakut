import {useState} from 'react';
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';

import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations';

const ProfileSidebar = ({githubUser}) => {
  return (
    <Box as="aside">
      <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px'}}  />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${githubUser}`}>
          @{githubUser}
        </a>
      </p>
      
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
};


export default function Home() {

  const [communities, setCommunities] = useState([]);

  const githubUser = 'leticiavargas';
  const favoritePerson = ['jeferson-checkplant', 'pedrolucasp', 'robsonfleal', 'johnwmcarneiro', 'felipemathies', 'rspedrini'];

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser}  />
        </div>
        <div className="welcomeArea" style={{gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subtitle">O que você deseja fazer?</h2>

            <form onSubmit={function handleCreateCommunity(e){
              e.preventDefault();
              const dataForm = new FormData(e.target);
              const community = {
                id: new Date().toISOString(),
                title: dataForm.get('title'),
                image: dataForm.get('image'),
              }
              const newCommunity = [...communities, community];
              setCommunities(newCommunity);
            }}>
              <div>
                <input 
                  placeholder="Qual vai ser o nome da comunidade?" 
                  name="title" 
                  aria-label="Qual vai ser o nome da comunidade?" 
                  type="text"
                />
              </div>
              <div>
                <input 
                  placeholder="Coloque uma URL para usarmos de capa" 
                  name="image" 
                  aria-label="Coloque uma URL para usarmos de capa" 
                  type="text"
                />
              </div>
              <button>Criar comunidade</button>
            </form>

          </Box>
        </div>
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper> 
            <h2 className="smalltitle">Comunidade ({communities?.length})</h2>
            <ul>
              {
                communities?.map((community) => {
                  return(
                    <li key={community.id}>
                      <a href={`/users/${community.title}`}>
                        <img src={`http://placehold.it/300x300`} />
                        <span>{community.title}</span> 
                      </a>
                    </li>
                    
                  );
                })
              
              }
            </ul>
          </ProfileRelationsBoxWrapper>
          
          <ProfileRelationsBoxWrapper> 
            <h2 className="smalltitle">Pessoas ({favoritePerson.length})</h2>
            <ul>
              {
                favoritePerson.map((person) => {
                  return(
                    <li key={person}>
                      <a href={`/users/${person}`} >
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
