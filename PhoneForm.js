import React, { Component } from "react";

class PhoneForm extends Component{
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        //페이지 리로딩 방지 form에서 submit 발생하면 페이지 다시 불러옴 이러면 상태 다잃어버림
        e.preventDefault();
        //onCreate를 통하여 부모에게 상태값 전달
        this.props.onCreate(this.state);
        //상태 초기화
        this.setState({
            name: '',
            phone:''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                    />
                    <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                    />
                    <button type="submit">등록</button>
            </form>
        
        );
    }
}

export default PhoneForm;