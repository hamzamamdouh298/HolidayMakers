import React, { useState } from 'react';
import './App.css';

const CustomerFormContent = () => {
    const [formState, setFormState] = useState({
        customerName: '', customerType: '', creditTerm: '', branch: '', country: '', city: '', regionCity: '',
        buildingNumber: '', address1: '', zipCode: '', refNote: '', fax: '', licenceNumber: '', ownerName: '', 
        staffOwner: '', accountManager: '', customerCode: '', accountingCode: '', galileoCode: '', address2: '', 
        telephone: '', additionalPhone: '', email: '', nationalID: '', passportNumber: '', amdOfficeIDs: '', 
        costPlus: '', customerCommission: '', url: '', taxNumber: '', title: '', nationality: '', remarkForInvoice: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Customer Data:', formState);
        alert('Customer created successfully!');
    };

    const clearForm = () => {
        setFormState({
            customerName: '', customerType: '', creditTerm: '', branch: '', country: '', city: '', regionCity: '',
            buildingNumber: '', address1: '', zipCode: '', refNote: '', fax: '', licenceNumber: '', ownerName: '', 
            staffOwner: '', accountManager: '', customerCode: '', accountingCode: '', galileoCode: '', address2: '', 
            telephone: '', additionalPhone: '', email: '', nationalID: '', passportNumber: '', amdOfficeIDs: '', 
            costPlus: '', customerCommission: '', url: '', taxNumber: '', title: '', nationality: '', remarkForInvoice: ''
        });
    };

    return (
        <div className="main-content">
            <div className="content-box">
                <h2>New Customer</h2>
                <p>Create a new customer profile.</p>
                
                <form onSubmit={handleSubmit} className="reservation-form">
                    <div className="form-grid">
                        {/* Row 1 */}
                        <div className="form-field">
                            <label>Customer name *</label>
                            <input
                                type="text"
                                name="customerName"
                                value={formState.customerName}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Enter customer name"
                                required
                            />
                        </div>

                        <div className="form-field">
                            <label>Customer type *</label>
                            <select
                                name="customerType"
                                value={formState.customerType}
                                onChange={handleInputChange}
                                className="form-select"
                                required
                            >
                                <option value="">Select Type</option>
                                <option value="individual">Individual</option>
                                <option value="corporate">Corporate</option>
                                <option value="vip">VIP</option>
                            </select>
                        </div>

                        <div className="form-field">
                            <label>Credit Term</label>
                            <input
                                type="text"
                                name="creditTerm"
                                value={formState.creditTerm}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Credit Term"
                            />
                        </div>

                        {/* Row 2 */}
                        <div className="form-field">
                            <label>Branch</label>
                            <select
                                name="branch"
                                value={formState.branch}
                                onChange={handleInputChange}
                                className="form-select"
                            >
                                <option value="">Select Branch</option>
                                <option value="main">Main Branch</option>
                                <option value="downtown">Downtown</option>
                                <option value="airport">Airport</option>
                            </select>
                        </div>

                        <div className="form-field">
                            <label>Country</label>
                            <select
                                name="country"
                                value={formState.country}
                                onChange={handleInputChange}
                                className="form-select"
                            >
                                <option value="">Select Country</option>
                                <option value="us">United States</option>
                                <option value="uk">United Kingdom</option>
                                <option value="ca">Canada</option>
                                <option value="au">Australia</option>
                                <option value="de">Germany</option>
                                <option value="fr">France</option>
                            </select>
                        </div>

                        <div className="form-field">
                            <label>City</label>
                            <input
                                type="text"
                                name="city"
                                value={formState.city}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="City"
                            />
                        </div>

                        {/* Row 3 */}
                        <div className="form-field">
                            <label>Region City</label>
                            <input
                                type="text"
                                name="regionCity"
                                value={formState.regionCity}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Region City"
                            />
                        </div>

                        <div className="form-field">
                            <label>Building Number</label>
                            <input
                                type="text"
                                name="buildingNumber"
                                value={formState.buildingNumber}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Building Number"
                            />
                        </div>

                        <div className="form-field">
                            <label>Address 1</label>
                            <input
                                type="text"
                                name="address1"
                                value={formState.address1}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Address 1"
                            />
                        </div>

                        {/* Row 4 */}
                        <div className="form-field">
                            <label>Zip Code</label>
                            <input
                                type="text"
                                name="zipCode"
                                value={formState.zipCode}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Zip Code"
                            />
                        </div>

                        <div className="form-field">
                            <label>Ref Note</label>
                            <input
                                type="text"
                                name="refNote"
                                value={formState.refNote}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Ref Note"
                            />
                        </div>

                        <div className="form-field">
                            <label>Fax</label>
                            <input
                                type="tel"
                                name="fax"
                                value={formState.fax}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Fax"
                            />
                        </div>

                        {/* Row 5 */}
                        <div className="form-field">
                            <label>Licence Number</label>
                            <input
                                type="text"
                                name="licenceNumber"
                                value={formState.licenceNumber}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Licence Number"
                            />
                        </div>

                        <div className="form-field">
                            <label>Owner Name</label>
                            <input
                                type="text"
                                name="ownerName"
                                value={formState.ownerName}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Owner Name"
                            />
                        </div>

                        <div className="form-field">
                            <label>Staff Owner</label>
                            <input
                                type="text"
                                name="staffOwner"
                                value={formState.staffOwner}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Staff Owner"
                            />
                        </div>

                        {/* Row 6 */}
                        <div className="form-field">
                            <label>Account Manager</label>
                            <input
                                type="text"
                                name="accountManager"
                                value={formState.accountManager}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Account Manager"
                            />
                        </div>

                        <div className="form-field">
                            <label>Customer Code</label>
                            <input
                                type="text"
                                name="customerCode"
                                value={formState.customerCode}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Customer Code"
                            />
                        </div>

                        <div className="form-field">
                            <label>Accounting Code</label>
                            <input
                                type="text"
                                name="accountingCode"
                                value={formState.accountingCode}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Accounting Code"
                            />
                        </div>

                        {/* Row 7 */}
                        <div className="form-field">
                            <label>Galileo Code</label>
                            <input
                                type="text"
                                name="galileoCode"
                                value={formState.galileoCode}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Galileo Code"
                            />
                        </div>

                        <div className="form-field">
                            <label>Address 2</label>
                            <input
                                type="text"
                                name="address2"
                                value={formState.address2}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Address 2"
                            />
                        </div>

                        <div className="form-field">
                            <label>Telephone</label>
                            <input
                                type="tel"
                                name="telephone"
                                value={formState.telephone}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Telephone"
                            />
                        </div>

                        {/* Row 8 */}
                        <div className="form-field">
                            <label>Additional Phone</label>
                            <input
                                type="tel"
                                name="additionalPhone"
                                value={formState.additionalPhone}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Additional Phone"
                            />
                        </div>

                        <div className="form-field">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formState.email}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Email"
                            />
                        </div>

                        <div className="form-field">
                            <label>National ID</label>
                            <input
                                type="text"
                                name="nationalID"
                                value={formState.nationalID}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="National ID"
                            />
                        </div>

                        {/* Row 9 */}
                        <div className="form-field">
                            <label>Passport Number</label>
                            <input
                                type="text"
                                name="passportNumber"
                                value={formState.passportNumber}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Passport Number"
                            />
                        </div>

                        <div className="form-field">
                            <label>Amd Office IDs</label>
                            <input
                                type="text"
                                name="amdOfficeIDs"
                                value={formState.amdOfficeIDs}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Amd Office IDs"
                            />
                        </div>

                        <div className="form-field">
                            <label>Cost Plus</label>
                            <input
                                type="text"
                                name="costPlus"
                                value={formState.costPlus}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Cost Plus"
                            />
                        </div>

                        {/* Row 10 */}
                        <div className="form-field">
                            <label>Customer Commission</label>
                            <input
                                type="text"
                                name="customerCommission"
                                value={formState.customerCommission}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Customer Commission"
                            />
                        </div>

                        <div className="form-field">
                            <label>URL</label>
                            <input
                                type="url"
                                name="url"
                                value={formState.url}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="URL"
                            />
                        </div>

                        <div className="form-field">
                            <label>Tax Number</label>
                            <input
                                type="text"
                                name="taxNumber"
                                value={formState.taxNumber}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Tax Number"
                            />
                        </div>

                        {/* Row 11 */}
                        <div className="form-field">
                            <label>Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formState.title}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Title"
                            />
                        </div>

                        <div className="form-field">
                            <label>Nationality</label>
                            <input
                                type="text"
                                name="nationality"
                                value={formState.nationality}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Nationality"
                            />
                        </div>

                        <div className="form-field">
                            <label>Remark For Invoice</label>
                            <input
                                type="text"
                                name="remarkForInvoice"
                                value={formState.remarkForInvoice}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Remark For Invoice"
                            />
                        </div>
                    </div>

                    {/* Footer with buttons */}
                    <div className="form-footer">
                        <button
                            type="button"
                            onClick={clearForm}
                            className="btn-clear"
                        >
                            Clear
                        </button>
                        <button
                            type="submit"
                            className="btn-add"
                        >
                            Add Customer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CustomerFormContent;