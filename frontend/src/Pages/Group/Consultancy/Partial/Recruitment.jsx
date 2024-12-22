import Card from "./Card";
import word1 from "../../../../assets/Consultancy/word1.jpg";
import work2 from "../../../../assets/Consultancy/work2.jpg";
import work3 from "../../../../assets/Consultancy/work3.png";
import work4 from "../../../../assets/Consultancy/work4.jpg";


const Recruitment = () => {
    const text1 = 'As one of the leading recruitment agencies, our goal is to bring you the most outstanding individuals to meet your staffing services needs. Our services provide you with the best associates to...'
    const text2 = 'A semi profession is an occupation that requires advanced knowledge and skills but is not widely regarded as a true profession. Traditional examples of semiprofessions...'
    const text3 = 'A skilled employee is one who is capable of working efficiently of exercising considerable independent judgement and of discharging his duties with responsibility. He must posses a thorough and comprehensive...'
    const text4 = 'Semi-Skilled labor does not require advanced training or specialized skills, but it does require more skills than an unskilled labor job. People who perform semi-skilled labor....'

    const title1 = 'Professional workforce'
    const title2 = 'Semi Professional Workers'
    const title3 = 'Skilled Employees'
    const title4 = 'Semi-Skilled Personnel'


    return (
        <div className="bg-color_4/30 py-4 px-2 lg:px-4 lg:py-10">
            <h1 className="font_title text-2xl lg:text-4xl font-bold text-color_3 text-center">Our Recruitment</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10 mt-4">
                <Card image={word1} text={text1} link={'page_1'} title={title1} />
                <Card image={work2} text={text2} link={'page_2'} title={title2} />
                <Card image={work3} text={text3} link={'page_3'} title={title3} />
                <Card image={work4} text={text4} link={'page_4'} title={title4} />
            </div>
        </div>
    );
};

export default Recruitment;