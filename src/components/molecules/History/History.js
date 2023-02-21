import {useCalculator} from 'context/calculatorContext';
import styles from './history.module.scss';
import Item from './Item/Item';
import ItemDetails from './ItemDetails/ItemDetails';

export default function History({id = null, details = false}) {
  const {getProject, updateProject} = useCalculator();
  const data = getProject(id)?.data;

  if (!data) {
    return <div className={styles.history} />;
  }

  const removeItem = (idItem) => {
    const newData = data.filter((item) => item.id !== idItem);
    updateProject(id, null, newData);
  };

  const updateItem = (idItem, name, toggleComplite) => {
    const newData = [...data];
    const indexItem = data.findIndex((element) => element.id === idItem);
    if (name) newData[indexItem].name = name;
    if (toggleComplite) {
      newData[indexItem].complite = !newData[indexItem].complite;
    }

    updateProject(id, null, newData);
  };

  return (
    <div className={styles.history}>
      {!details
        ? data.map((item) => (
            <Item key={item.id} item={item} removeItem={removeItem}>
              {item.value}
            </Item>
          ))
        : data.map((item, itemIndex, wholeArray) => {
            const underline = wholeArray.length - 1 !== itemIndex;
            return (
              <ItemDetails
                key={item.id}
                item={item}
                underline={underline}
                removeItem={removeItem}
                updateItem={updateItem}
              >
                {item.value}
              </ItemDetails>
            );
          })}
    </div>
  );
}
