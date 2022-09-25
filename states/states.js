import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
/**
 * 사용 방법
 *  const [test, setTest] = useRecoilState(testState);
 *  get : console.log(test.isTest); => false
 *  set : setTest({...isTest : true}); => true
 */
const testState = atom({
  key: "test",
  default: {
    isTest: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export { testState };