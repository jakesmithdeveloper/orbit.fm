import React from 'react';
import styled from 'react-emotion';
import humanizeList from 'humanize-list';
import * as COLORS from '../constants/colors';

const Container = styled.div`
  border-bottom: 1px solid ${COLORS.DIVIDER};
  margin-bottom: 40px;
`;

const Image = styled.div`
  max-width: 150px;
  margin-right: 20px;
`;

const Top = styled.div`
  display: flex;
`;

const EpisodeListing = ({ episode }) => (
  <Container>
    <Top>
      {episode.podcast.image && (
        <Image>
          <img src={`http:${episode.podcast.image.file.url}`} />
        </Image>
      )}
      <div>
        <p>{episode.podcast.name}</p>
        <p>{episode.name}</p>
        <p>{episode.publicationDate}</p>
        <p>
          Hosted by{' '}
          {humanizeList(
            episode.podcast.hosts.map(h => h.name, { oxfordComma: true })
          )}
        </p>
      </div>
    </Top>
    <p>{episode.shortDescription}</p>
  </Container>
);

export default EpisodeListing;
