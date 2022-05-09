import React, { useState, useRef } from "react";







const Add_bed = (props) => {
    //upload image
    /*const [imageSrc, setImageSrc] = useState()
    const handleImageSelect = (e) => {
        setImageSrc(URL.createObjectURL(e.target.files[0]))
    }
    const dispatch = useDispatch()
    const priceRef = useRef()
    const [priceValue, setPriceValue] = useState(100)

    const price1Ref = useRef()
    const [price1Value, setPrice1Value] = useState(100)

    const price2Ref = useRef()
    const [price2Value, setPrice2Value] = useState(100)
    //charges
    const Fbexpress = useRef();
    const Rpo = useRef();
    const Visitcharges = useRef();

    //facility
    const Linen = useRef();
    const Television = useRef();
    const AttendantCouch = useRef();
    const FullyEquiped = useRef();
    const [check, setCheck] = useState([])

    //Charges
    const HandleChangeFbexpress = () => {
        let clickedThreeValue = Fbexpress?.current?.defaultValue;
        filteredArray(clickedThreeValue);

    }
    const HandleChangeVisitcharges = () => {
        let clickedThreeValue = Visitcharges?.current?.defaultValue;
        filteredArray(clickedThreeValue);

    }
    const HandleChangeRpo = () => {
        let clickedThreeValue = Rpo?.current?.defaultValue;
        filteredArray(clickedThreeValue);

    }

    //facility
    const HandleChangeTelevision = () => {
        let clickedThreeValue = Television?.current?.defaultValue;
        filteredArray(clickedThreeValue);

    }
    const HandleChangeLinen = () => {
        let clickedThreeValue = Linen?.current?.defaultValue;
        filteredArray(clickedThreeValue);

    }
    const HandleChangeAttendantCouch = () => {
        let clickedThreeValue = AttendantCouch?.current?.defaultValue;
        filteredArray(clickedThreeValue);
    }
    const HandleChangeFullyEquiped = () => {
        let clickedThreeValue = FullyEquiped?.current?.defaultValue;
        filteredArray(clickedThreeValue);

    }

    const filteredArray = (clicked) => {
        setCheck((prevState) => {
            let isIndexFound = prevState.indexOf(clicked);
            console.log(isIndexFound, 'isIndexFound');
            if (isIndexFound === -1) {
                prevState.push(clicked);
                return prevState;
            }
            else {
                prevState.splice(isIndexFound, 1);
                return prevState;
            }
        });

    }
    const onClear = (e) => {
        e.preventDefault();
        setCheck([]);
        Linen.current.clearValue();
        Television.current.checked = false;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch((check))

    }
    const option = [
        { value: 'General Ward', label: 'General Ward' },
        { value: 'Private Wards', label: 'Private Wards' },
        { value: 'Semi_Private Wards', label: 'Semi_Private Wards' },
        { value: 'CCU', label: 'CCU' },
        { value: 'ICCU', label: 'ICCU' },
        { value: 'Deluxe Room', label: 'Deluxe Room' },
        { value: 'SICU', label: 'SICU' },


    ]
    const option1 = [
        { value: 'Manual Beds', label: 'Manual Beds' },
        { value: 'Low Beds', label: 'Low Beds' }
    ]
    const setPrice = () => {
        setPriceValue(priceRef.current.value);

    }
    const setPrice1 = () => {
        setPrice1Value(price1Ref.current.value);

    }

    const setPrice2 = () => {
        setPrice2Value(price2Ref.current.value);

    }
    const [total, setTotalAmmount] = useState('0')

    const Total1 = () => {
        if (setPrice1) {
            return Number.parseInt(price1Ref.current.value);
        }
    }
    const Total2 = () => {
        if (setPrice) {
            return Number.parseInt(priceRef.current.value);
        }
    }
    const Total3 = () => {
        if (setPrice2) {
            return Number.parseInt(price2Ref.current.value);
        }
    }

    const getTotal = () => {
        const result = Total1() + Total2() + Total3();
        console.log(result);
        return result;
    }
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();*/

    return (
        <>
            <div>
               <p>Add Bed</p>
            </div>

        </>
    )
}
export default Add_bed;