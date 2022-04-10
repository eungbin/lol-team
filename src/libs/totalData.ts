import rareUnits from '../data/Rare.json';
import uniqueUnits from '../data/Unique.json';
import hiddenUnits from '../data/Hidden.json';
import legendUnits from '../data/Legend.json';
import injuryeokUnits from '../data/Injuryeok.json';
import misuUnits from '../data/Misu.json';
import eliteUnits from '../data/Elite.json';
import limitUnits from '../data/limit.json';
import epicUnits from '../data/Epic.json';
import infinityUnits from '../data/infinity.json';

const data = () => {
  const totalKeys: string[] = [];
  const rareKeys: string[] = Object.keys(rareUnits);
  const uniqueKeys: string[] = Object.keys(uniqueUnits);
  const hiddenKeys: string[] = Object.keys(hiddenUnits);
  const legendKeys: string[] = Object.keys(legendUnits);
  const injuryeokKeys: string[] = Object.keys(injuryeokUnits);
  const misuKeys: string[] = Object.keys(misuUnits);
  const eliteKeys: string[] = Object.keys(eliteUnits);
  const limitKeys: string[] = Object.keys(limitUnits);
  const epicKeys: string[] = Object.keys(epicUnits);
  const infinityKeys: string[] = Object.keys(infinityUnits);

  getAllKeys(rareKeys, totalKeys);
  getAllKeys(uniqueKeys, totalKeys);
  getAllKeys(hiddenKeys, totalKeys);
  getAllKeys(legendKeys, totalKeys);
  getAllKeys(injuryeokKeys, totalKeys);
  getAllKeys(misuKeys, totalKeys);
  getAllKeys(eliteKeys, totalKeys);
  getAllKeys(limitKeys, totalKeys);
  getAllKeys(epicKeys, totalKeys);
  getAllKeys(infinityKeys, totalKeys);
  
  return totalKeys;
}

const getAllKeys = (units: string[], arrays: string[]) => {
  for(let unit of units) {
    arrays.push(unit);
  }
}

export const totalData: string[] = data();