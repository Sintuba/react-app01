import React from "react";
import {Button,ButtonGroup} from '@chakra-ui/react';

const MyButton = ({label,onClick}) => {
    //ボタンクリック時の処理
    const handleClick = () =>{
        if(onClick){
            onClick();
        }
    }
    return(
        <>
            <Button onClick={handleClick} className="my-button">
                {label}
                 {/* export先では
                  const handleButtonClick = () => {
                    //処理
                  };
                  return(
                    <Button label="str" onClick={hadleButtonClick} />
                  );
                 */}
            </Button>
        </>
    );
};

export default MyButton;