'use client';

import {useState} from 'react';
import {SearchBox} from './SearchBox';

export function HomeSearch(){
  const [mode,setMode]=useState<'flights'|'hotels'|'packages'|'deals'>('flights');
  return <SearchBox mode={mode} onModeChange={setMode} showDealsTab homeMode/>;
}
