import {useState} from 'react';
import {MdCheck, MdClose, MdOutlineCancel, MdSaveAlt} from 'react-icons/md';

import IconButton from 'components/atoms/buttons/IconButton/IconButton';
import Input from 'components/atoms/Input/Input';
import styles from './itemDetails.module.scss';

export default function ItemDetails(props) {
  const {item, underline, removeItem, updateItem, children} = props;

  const [editName, setEditName] = useState(false);
  const [name, setname] = useState(item.name);

  const isActive = item.complite && `${styles.active}`;

  return (
    <>
      {!editName ? (
        <div className={styles.itemDetails}>
          <IconButton type="button" onClick={() => removeItem(item.id)} remove>
            <MdClose />
          </IconButton>

          <button
            type="button"
            className={`${styles.itemDetails__name} ${isActive}`}
            onClick={() => setEditName(!editName)}
          >
            {item.name || 'No name'}
          </button>

          <div className={`${styles.itemDetails__cost} ${isActive}`}>
            {children}
          </div>

          <button
            type="button"
            className={`${styles.btnChecked} ${isActive}`}
            onClick={() => updateItem(item.id, null, true)}
          >
            <MdCheck />
          </button>
        </div>
      ) : (
        <div className={`${styles.editItemDetails}`}>
          <IconButton onClick={() => setEditName(!editName)} remove>
            <MdOutlineCancel />
          </IconButton>

          <Input value={name} onChange={(e) => setname(e.target.value)} />

          <IconButton
            onClick={() => {
              updateItem(item.id, name);
              setEditName(!editName);
            }}
          >
            <MdSaveAlt />
          </IconButton>
        </div>
      )}
      {underline ? <hr className={styles.itemDetails__underline} /> : null}
    </>
  );
}

// ItemDetails.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     name: PropTypes.string,
//     complite: PropTypes.bool,
//   }).isRequired,
//   underline: PropTypes.bool,
//   removeItem: PropTypes.func.isRequired,
//   updateItem: PropTypes.func.isRequired,
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
// };

// ItemDetails.defaultProps = {
//   underline: false,
// };
