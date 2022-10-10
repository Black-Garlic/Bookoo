export const RecoilUtils = {
  /**
   * 모달 선택
   * @param type
   * @param state
   * @param setState
   */
  toggleModal: (type: any, state: any, setState: any) => {
    const cp = { ...state };
    cp[type] = !state[type];
    setState(cp);
  },
};
