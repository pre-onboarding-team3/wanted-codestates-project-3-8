import React, { useState } from 'react';
import styled from 'styled-components';
import AddListBtn from '../components/AddListBtn';
import DataList from '../components/DataList';
import SearchBar from '../components/Search/SearchBar';
import { useSelector } from 'react-redux';

const Main = () => {
  const [searchTheme, setSearchTheme] = useState('name');
  const [searchContent, setSearchContent] = useState('');
  const placeData = useSelector(state => ({
    placeData: state.placeData.placeItems,
  })).placeData.filter(item => item[searchTheme].includes(searchContent));

  return (
    <Wrap>
      <SearchBar
        setSearchTheme={setSearchTheme}
        setSearchContent={setSearchContent}
      />
      <h2>저장된 목록</h2>
      <ul>
        {placeData?.map((item, idx) => {
          return (
            <DataList
              item={item}
              key={idx}
              idx={idx}
              title={item.name}
              address={item.address}
              tel={item.phoneNumber}
              message={item.message}
            />
          );
        })}
      </ul>
      <AddListBtn />
    </Wrap>
  );
};

const Wrap = styled.div`
  max-width: 428px;
  margin: 20px auto;
  h2 {
    margin: 17px;
    font-weight: bold;
    font-size: 18px;
  }
`;

export default Main;
