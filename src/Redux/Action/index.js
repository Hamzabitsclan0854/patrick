export const userinfo = (val) => {
    return {
      type: "name",
      payload: val,
    };
  };

  // const Context = creatContext()
  // const getValue = (id) => {
  //   return id
  // }

  // <Context.Provider value={getValue}>

  // </Context.Provider>

  // const {getValue} = useContext()

  // getValue(istate)

// result calculation action ...................

export const resultGroundFloor = (val) => {
    return {
      type: "resultGroundFloor",
      payload: val,
    };
  };
export const resultFirstFloor = (val) => {
    return {
      type: "resultFirstFloor",
      payload: val,
    };
  };
export const resultAtticFloor = (val) => {
    return {
      type: "resultAtticFloor",
      payload: val,
    };
  };

  // hurray reducer ...............................

  export const isHurray = (val) =>{
    return {
      type: "hurray",
      payload: val,
    };
  }