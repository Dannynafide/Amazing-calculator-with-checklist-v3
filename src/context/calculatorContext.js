import {nanoid} from 'nanoid';
import React, {useCallback, useEffect, useMemo, useState} from 'react';

import {evaluateCalculator} from '../helpers/mathFunc';

function getInitialState() {
  const initialValue = [
    {
      id: 'example1',
      name: 'Trip to mountains',
      data: [
        {
          id: 0,
          name: 'fuel',
          value: '120+100*2',
          complite: false,
        },
        {
          id: 1,
          name: 'tickets',
          value: '70+30*4',
          complite: false,
        },
        {
          id: 2,
          name: 'equipment rental',
          value: '150',
          complite: false,
        },
        {
          id: 3,
          name: 'rent a room',
          value: '750',
          complite: false,
        },
      ],
    },
    {
      id: 'example2',
      name: 'Monthly fees',
      data: [
        {
          id: 0,
          name: 'internet',
          value: '50',
          complite: false,
        },
        {
          id: 1,
          name: 'rent',
          value: '380',
          complite: false,
        },
        {
          id: 2,
          name: 'light fee',
          value: '90',
          complite: false,
        },
        {
          id: 3,
          name: 'water fee',
          value: '70',
          complite: false,
        },
      ],
    },
  ];

  let projects = localStorage.getItem('projects');
  projects = projects ? JSON.parse(projects) : null;
  return projects?.length > 0 ? projects : initialValue;
}

const CalculatorContext = React.createContext();

function CalculatorProvider({children}) {
  const [projects, setProjects] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const memoedValue = useMemo(
    () => ({
      projects,
      setProjects,
    }),
    [projects]
  );

  return (
    <CalculatorContext.Provider value={memoedValue}>
      {children}
    </CalculatorContext.Provider>
  );
}

function useCalculator() {
  const context = React.useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error(`useCalculator must be used within a CalculatorProvider`);
  }
  const {projects, setProjects} = context;

  const addProject = (data, name) => {
    const newValue = {
      id: nanoid(),
      name: name || '',
      data: data ? [data] : [],
    };

    setProjects((prevItems) => [...prevItems, newValue]);
    return newValue.id;
  };

  const addTask = (idProject, nameItem, valueItem, compliteItem) => {
    const newState = [...projects];
    const projectIndex = newState.findIndex(
      (element) => element.id === idProject
    );
    newState[projectIndex].data.push({
      id: nanoid(),
      name: nameItem,
      value: valueItem,
      complite: compliteItem,
    });

    setProjects(newState);
    return true;
  };

  const removeProject = (id) => {
    const newState = projects.filter((item) => item.id !== id);
    setProjects(newState);
    return newState;
  };

  const updateProject = (id, name, data) => {
    const newState = [...projects];
    const projectIndex = newState.findIndex(
      (element) => element.id.toString() === id.toString()
    );
    if (name) newState[projectIndex].name = name;
    if (data) newState[projectIndex].data = data;

    setProjects(newState);
    return true;
  };

  const getProject = useCallback(
    (id) => projects.find((element) => element.id === id),
    [projects]
  );

  const getResult = (id) => {
    const itemFound = projects.find((element) => element.id === id);
    if (!itemFound) return undefined;

    let count = '0';
    itemFound.data?.forEach((e) => {
      count = `${count}+${e.value}`;
    });

    return evaluateCalculator(count);
  };

  return {
    projects,
    addProject,
    addTask,
    removeProject,
    updateProject,
    getProject,
    getResult,
  };
}

export {CalculatorProvider, useCalculator};
