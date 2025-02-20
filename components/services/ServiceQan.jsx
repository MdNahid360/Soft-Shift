import { Collapse } from "antd";
import { Plus, Minus } from "lucide-react";




const ServiceQan = ({ questions }) => {
    const onChange = (key) => {
        console.log(key);
    };

    const items = questions?.map(itm => ({
        key: itm?.id,
        label: itm?.question,
        children: <p>{itm?.answer}</p>
    }))



    console.log('items', items);

    return (
        <Collapse
            accordion
            expandIconPosition="right"
            expandIcon={({ isActive }) =>
                isActive ? <Minus size={18} /> : <Plus size={18} />
            }
            items={items}
            defaultActiveKey={["1"]}
            onChange={onChange}
        />
    );
};

export default ServiceQan;
