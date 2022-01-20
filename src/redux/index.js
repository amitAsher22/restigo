import { ITEMS, SETACTIVESUPPLIER, SUPPLIERS, SETACTIVEORDER } from './type'

const initStateDetails = {
  activeSupplier: {},
  activeOrder: {},
  suppliers: [
    {
      "id": "1",
      "name": "אוסם",
      "costumer_number": "2365",
      "min_order": "200",
      "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Osem_Logo.svg/1920px-Osem_Logo.svg.png"
    },
    {
      "id": "2",
      "name": "החברה המרכזית למשקאות בעמ",
      "costumer_number": "452654",
      "min_order": "300",
      "logo": "https://upload.wikimedia.org/wikipedia/he/thumb/a/aa/Hachevra_Hamerkazit_Clean.svg/1920px-Hachevra_Hamerkazit_Clean.svg.png"
    },
    {
      "id": "3",
      "name": "מוצרי איכות אמריקאיים בעמ",
      "costumer_number": "",
      "min_order": "500",
      "logo": "https://americanqualityhealthproducts.com/themes/panda/img/aqhp.svg"
    }
  ],

  items: [
    {
      "name": "אננס חתוך מוסדי A9",
      "catalog_number": "3101",
      "scale": "קג",
      "supplier_id": "1",
      "price": "141",
      "deposit": "0"
    },
    {
      "name": "אנשובי",
      "catalog_number": "2309",
      "scale": "יחידות",
      "supplier_id": "1",
      "price": "90",
      "deposit": "0"
    },
    {
      "name": "אקסטרא גל לחיטוי זהר דליה",
      "catalog_number": "64154",
      "scale": "ליטר",
      "supplier_id": "1",
      "price": "23.7",
      "deposit": "0"
    },
    {
      "name": "אשפתון שחור 76/85 גליל",
      "catalog_number": "65151",
      "scale": "גרם",
      "supplier_id": "1",
      "price": "115",
      "deposit": "0"
    },
    {
      "name": "גביעון לרוטב +מכסה 2 אוז",
      "catalog_number": "955046",
      "scale": "יחידות",
      "supplier_id": "1",
      "price": "91.6",
      "deposit": "0"
    },
    {
      "name": "גביעון קשיח לרוטב + מכסה 1 OZ",
      "catalog_number": "12266",
      "scale": "יחידות",
      "supplier_id": "1",
      "price": "70",
      "deposit": "0"
    },
    {
      "name": "דלי שטיפה פלסטיק גדול עם פיה",
      "catalog_number": "10369",
      "scale": "יחידות",
      "supplier_id": "1",
      "price": "8",
      "deposit": "0"
    },
    {
      "name": "זית טבעות ירוק ב השיטה עדח",
      "catalog_number": "65443",
      "scale": "ליטר",
      "supplier_id": "1",
      "price": "68",
      "deposit": "0"
    },
    {
      "name": "זית טבעות מושחר ב. השיטה עדח",
      "catalog_number": "65242",
      "scale": "ליטר",
      "supplier_id": "1",
      "price": "76.3",
      "deposit": "0"
    },
    {
      "name": "קוקה קולה 1.5",
      "catalog_number": "10160",
      "scale": "יחידות",
      "supplier_id": "2",
      "price": "68.61",
      "deposit": "6.72"
    },
    {
      "name": "קולה ZERO",
      "catalog_number": "23435",
      "scale": "יחידות",
      "supplier_id": "2",
      "price": "68.61",
      "deposit": "0"
    },
    {
      "name": "ספרייט   LIME",
      "catalog_number": "30149",
      "scale": "יחידות",
      "supplier_id": "2",
      "price": "68.61",
      "deposit": "0"
    },
    {
      "name": "פאנטה אורנג 1.5 ליטר",
      "catalog_number": "10231",
      "scale": "יחידות",
      "supplier_id": "2",
      "price": "65.85",
      "deposit": "6.72"
    },
    {
      "name": "שרינק FUZE tea אפרסק - 1.5 ליטר",
      "catalog_number": "30878",
      "scale": "יחידות",
      "supplier_id": "2",
      "price": "70.07",
      "deposit": "6.72"
    },
    {
      "name": "ZERO ספרייט - 1.5 ליטר - 12",
      "catalog_number": "26790",
      "scale": "יחידות",
      "supplier_id": "2",
      "price": "68.61",
      "deposit": "6.72"
    },
    {
      "name": "נביעות",
      "catalog_number": "10477",
      "scale": "יחידות",
      "supplier_id": "2",
      "price": "17.1",
      "deposit": "0"
    },
    {
      "name": "סליק קוקה קולה   מבצע",
      "catalog_number": "30211",
      "scale": "יחידות",
      "supplier_id": "2",
      "price": "56.87",
      "deposit": "7.2"
    },
    {
      "name": "סליק דיאט קוקה קולה מבצע",
      "catalog_number": "30212",
      "scale": "יחידות",
      "supplier_id": "2",
      "price": "56.87",
      "deposit": "7.2"
    },
    {
      "name": "סליק ספרייט LIME   מבצע",
      "catalog_number": "30154",
      "scale": "יחידות",
      "supplier_id": "2",
      "price": "56.87",
      "deposit": "7.2"
    },
    {
      "name": "פיינט ניו- יורק סופר FT",
      "catalog_number": "72986455",
      "scale": "מל",
      "supplier_id": "3",
      "price": "69",
      "deposit": "0"
    },
    {
      "name": "פיינט צאנקי מאנקי FT",
      "catalog_number": "72986479",
      "scale": "מל",
      "supplier_id": "3",
      "price": "69",
      "deposit": "0"
    },
    {
      "name": "פיינט שוקולד בראוניס FT",
      "catalog_number": "72989425",
      "scale": "מל",
      "supplier_id": "3",
      "price": "69",
      "deposit": "0"
    },
    {
      "name": "פיינט דולצה דה לצה FT",
      "catalog_number": "72991886",
      "scale": "מל",
      "supplier_id": "3",
      "price": "69",
      "deposit": "0"
    },
    {
      "name": "פיינט קרם עוגיות בדץ FT",
      "catalog_number": "72986424",
      "scale": "מל",
      "supplier_id": "3",
      "price": "69",
      "deposit": "0"
    },
    {
      "name": "פיינט טופי קראנץ FT",
      "catalog_number": "72986448",
      "scale": "מל",
      "supplier_id": "3",
      "price": "69",
      "deposit": "0"
    },
    {
      "name": "פיינט בצק עוגיות FT",
      "catalog_number": "72986449",
      "scale": "מל",
      "supplier_id": "3",
      "price": "69",
      "deposit": "0"
    },
    {
      "name": "בצק עוגיות - שורטי",
      "catalog_number": "72986450",
      "scale": "מל",
      "supplier_id": "3",
      "price": "132",
      "deposit": "0"
    },
    {
      "name": "צאנקי מנקי - שורטי",
      "catalog_number": "72986451",
      "scale": "מל",
      "supplier_id": "3",
      "price": "132",
      "deposit": "0"
    },
    {
      "name": "דולצה דה לצה - שורטי FT",
      "catalog_number": "72986452",
      "scale": "מל",
      "supplier_id": "3",
      "price": "132",
      "deposit": "0"
    }
  ]

}

export const reducer = (state = initStateDetails, action = {}) => {
  switch (action.type) {
    case SETACTIVEORDER:
      if (!action.payload) {  //if payload is empty reset the active order
        // this is the place to save in draft object
        localStorage.setItem(state.activeSupplier.id, state.activeOrder);
        const getItemFromStorage = JSON.parse(localStorage.getItem(action.payload.supplier_id)) || {}
        return { ...state, activeOrder: getItemFromStorage };
      }

      const newProductId = action.payload.catalog_number
      const productFromState = state.activeOrder[action.payload.catalog_number];
      const newObj = { ...state.activeOrder }

      if (productFromState) { // if already exist just update the amount
        const copyOfProductFromState = { ...productFromState };
        copyOfProductFromState.amount++;

        newObj[newProductId] = copyOfProductFromState
      } else {
        // new item
        const copyOfNewProduct = { ...action.payload, amount: 1 }
        newObj[newProductId] = copyOfNewProduct; 
      }

      return { ...state, activeOrder: newObj };
    case SETACTIVESUPPLIER:
      return { ...state, activeSupplier: action.payload };
    case ITEMS:
      return { ...state, items: action.payload }
    case SUPPLIERS:
      return { ...state, suppliers: action.payload }
    default:
      return { ...state }
  }
}