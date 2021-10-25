import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const GenderDropdown = ({ genderSelected }) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Please select gender
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => {
                    genderSelected('men')
                }}>Men</Dropdown.Item>
                <Dropdown.Item onClick={() => {
                    genderSelected('women')
                }} >Women</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
export default GenderDropdown