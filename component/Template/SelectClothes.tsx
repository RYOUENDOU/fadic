import { FC } from "react";
import ClothesCard from "../Organisms/ClothesCard";

type Props = {
  isMaleActive: boolean;
  isFirstRegister: boolean;
  selectedTopsColorList: string[];
  setSelectedTopsColorList: (selectedTopsColorList: string[]) => void;
  selectedPantsColorList: string[];
  setSelectedPantsColorList: (selectedPantsColorList: string[]) => void;
  selectedSkirtColorList: string[];
  setSelectedSkirtColorList: (selectedSkirtColorList: string[]) => void;
};

const SelectClothes: FC<Props> = ({
  isMaleActive,
  isFirstRegister,
  selectedTopsColorList,
  setSelectedTopsColorList,
  selectedPantsColorList,
  setSelectedPantsColorList,
  selectedSkirtColorList,
  setSelectedSkirtColorList,
}) => {
  return (
    <>
      {/* サーバー側の処理で、clothesTypeごとにどの服の選択肢があるかを取得する。一旦はmockで選択肢を指定 */}
      <ClothesCard
        isFirstRegister={isFirstRegister}
        clothesType="tops"
        selectedClothesColorList={selectedTopsColorList}
        setSelectedClothesColorList={setSelectedTopsColorList}
      />
      <ClothesCard
        isFirstRegister={isFirstRegister}
        clothesType="pants"
        selectedClothesColorList={selectedPantsColorList}
        setSelectedClothesColorList={setSelectedPantsColorList}
      />
      {/* これclothesTypeList作って親コンポーネントから渡して、mapでfor回す方が良さそう */}
      {isMaleActive ? null : (
        <ClothesCard
          isFirstRegister={isFirstRegister}
          clothesType="skirt"
          selectedClothesColorList={selectedSkirtColorList}
          setSelectedClothesColorList={setSelectedSkirtColorList}
        />
      )}
    </>
  );
};

export default SelectClothes;
