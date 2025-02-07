'use client'

import { useState } from 'react'
import styles from './bingo.module.css'
import { BingoPackage } from './page'
import { BingoQuestion } from './page'

const mockPackages: BingoPackage[] = [
  { id: '1', name: 'история XX века',author: "andrush4",  description: 'чтобы знашка по совку от зубов отлетала', questions: [
    {fact: "Глобализация",description:  "Процесс интеграции экономик, культур и политик стран мира."},
    {fact: "Холодная война",description:  "Период политической и военной напряженности между США и СССР после Второй мировой войны."},
    {fact: "Деколонизация",description:  "Процесс освобождения колоний от иностранного господства в середине 20 века."},
    {fact: "Кибернетика",description:  "Наука о системах управления и связи, которая стала основой для развития ИТ."},
    {fact: "Феминизм",description:  "Движение за права женщин и равенство полов, активно развивавшееся в 20 веке."},
    {fact: "Нуклеарная энергия",description:  "Энергия, получаемая в результате ядерных реакций, используемая в энергетике и военном деле."},
    {fact: "Социализм",description:  "Идеология, стремящаяся к равенству и коллективной собственности на средства производства."},
    {fact: "Капитализм",description:  "Экономическая система, основанная на частной собственности и свободном рынке."},
    {fact: "Советский Союз",description: "Социалистическое государство, существовавшее с 1922 по 1991 год, охватывавшее множество республик."},
    {fact: "Модернизм",description:  "Культурное и художественное движение, стремившееся к новаторству и отторжению традиций."},
    {fact: "Квантовая механика",description:  "Раздел физики, изучающий поведение частиц на микроскопическом уровне."},
    {fact: "Вторая мировая война",description:  "Глобальный конфликт с 1939 по 1945 год, затронувший большинство стран мира."},
    {fact: "Джон Кеннеди",description:  "35-й президент США, убитый в 1963 году, символизировавший новую эру в американской политике."},
    {fact: "Мартин Лютер Кинг",description:  "Американский борец за гражданские права, известный своей ролью в движении за расовую справедливость."},
    {fact: "Махатма Ганди",description:  "Лидер индийского движения за независимость, известный своей философией ненасилия."},
    {fact: "Постмодернизм",description:  "Культурное и философское движение, отвергающее универсальные истины и акцентирующее относительность."},
    {fact: "Роберт Оппенгеймер",description:  "Американский физик, один из руководителей Манхэттенского проекта по созданию атомной бомбы."},
    {fact: "Вьетнамская война",description:  "Конфликт между Северным и Южным "
    }]
  },
  { id: '2', name: 'исскуство США', author: "andrush4", description: 'чтобы знать что нибудь кроме банок супа уорхола', questions: [
    { fact: "Глобализация", description: "Процесс интеграции экономик, культур и политик стран мира." },
    { fact: "Холодная война", description: "Период политической и военной напряженности между США и СССР после Второй мировой войны." },
    { fact: "Деколонизация", description: "Процесс освобождения колоний от иностранного господства в середине 20 века." },
    { fact: "Кибернетика", description: "Наука о системах управления и связи, которая стала основой для развития ИТ." },
    { fact: "Феминизм", description: "Движение за права женщин и равенство полов, активно развивавшееся в 20 веке." },
    { fact: "Нуклеарная энергия", description: "Энергия, получаемая в результате ядерных реакций, используемая в энергетике и военном деле." },
    { fact: "Социализм", description: "Идеология, стремящаяся к равенству и коллективной собственности на средства производства." },
    { fact: "Капитализм", description: "Экономическая система, основанная на частной собственности и свободном рынке." },
    { fact: "Советский Союз", description: "Социалистическое государство, существовавшее с 1922 по 1991 год, охватывавшее множество республик." },
    { fact: "Модернизм", description: "Культурное и художественное движение, стремившееся к новаторству и отторжению традиций." }
] },
  { id: '3', name: 'страны африки', author: "andrush4", description: 'чтобы быть как даня гаврилов', questions: [{fact: 'никита катити', description: 'главная надежда 2025'}] },
  { id: '4', name: 'литература XXI века в россии', author: "andrush4", description: 'мне бы пригодилось а то хз че тут писать', questions: [{fact: 'никита катити', description: 'главная надежда 2025'}] },
  { id: '5', name: 'команды НХЛ', author: "andrush4", description: 'чтобы тимпопа выносить', questions: [{fact: 'никита катити', description: 'главная надежда 2025'}] },
]

interface PackageListProps {
  onSelectPackage: (pkg: BingoPackage) => void;
}

export default function PackageList({ onSelectPackage }: PackageListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [packages, setPackages] = useState(mockPackages)

  // TODO: package search on backend side
  const handleSearch = () => {
    // This function will be implemented to trigger the backend search
    console.log('Searching for:', searchTerm)
  }

  return (
    <div className={styles.packageList}>
      <h2 className={styles.packageListTitle}>Available Packages</h2>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search packages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <button onClick={handleSearch} className={styles.searchButton}>
          Search
        </button>
      </div>
      <ul className={styles.packageItems}>
        {mockPackages.map(pkg => (
          <li 
            key={pkg.id} 
            className={styles.packageItem}
            onClick={() => onSelectPackage(pkg)}
          >
            {pkg.name}
          </li>
        ))}
      </ul>
    </div>
  )
}