import React from 'react'
import { Checkbox, DatePicker, Input   } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

class Checkboxs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedList: defaultCheckedList,
            indeterminate: true,
            checkAll: false,
            text:1
        };
        this.changeValue = this.changeValue.bind(this);
    }
    onChange = checkedList => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
            checkAll: checkedList.length === plainOptions.length,
        });
    };

    onCheckAllChange = e => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    };
    changeValue = e => {
        this.setState({
            text: e.target.value,
            
        });
    }
    render(){
        let button;
        if(false) {
            button = <p>true</p>
        } else {
            button = <p>false</p>
        }
        return(
            <div>
                
                <Checkbox
                    indeterminate={this.state.indeterminate}
                    onChange={this.onCheckAllChange}
                    checked={this.state.checkAll}
                >
                    Check all
                </Checkbox>
                
                <br />
                <CheckboxGroup
                    options={plainOptions}
                    value={this.state.checkedList}
                    onChange={this.onChange}
                />
                <DatePicker locale={locale}/>
                <br />
                <MonthPicker  placeholder="Select month" />
                <br />
                <RangePicker locale={locale}/>
                <br />
                <WeekPicker  placeholder="Select week" />
                <Input placeholder="Basic usage" value={this.state.text} onChange={this.changeValue}/>
                <span>{this.state.text}</span>
                {button}
            </div>
        )
    }
}

export default Checkboxs