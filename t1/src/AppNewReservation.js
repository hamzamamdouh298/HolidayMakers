import React, { useState } from 'react';
import './App.css';

const AppNewReservation = () => {
    const [formData, setFormData] = useState({
        reservationType: '',
        customerAccount: '',
        salesOfficer: '',
        currency: 'USD',
        followUp: '',
        branch: '',
        checkInDate: '',
        reservationNumber: '',
        hideVat: true,
        notes: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reservation Data:', formData);
        alert('Reservation submitted successfully!');
    };

    const clearForm = () => {
        setFormData({
            reservationType: '',
            customerAccount: '',
            salesOfficer: '',
            currency: 'USD',
            followUp: '',
            branch: '',
            checkInDate: '',
            reservationNumber: '',
            hideVat: true,
            notes: ''
        });
    };

    return (
        <div className="main-content">
            <div className="content-box">
                <h2>New Reservation</h2>
                <p>Create a new reservation for your guests.</p>
                
                <form onSubmit={handleSubmit} className="reservation-form">
                    <div className="form-grid">
                        {/* Row 1 */}
                        <div className="form-field">
                            <label>Choose Type</label>
                            <select
                                name="reservationType"
                                value={formData.reservationType}
                                onChange={handleInputChange}
                                className="form-select"
                            >
                                <option value="">Select Ledger</option>
                                <option value="hotel">Hotel Reservation</option>
                                <option value="restaurant">Restaurant Booking</option>
                                <option value="event">Event Booking</option>
                            </select>
                        </div>

                        <div className="form-field">
                            <label>Related Account</label>
                            <select
                                name="customerAccount"
                                value={formData.customerAccount}
                                onChange={handleInputChange}
                                className="form-select"
                            >
                                <option value="">Search</option>
                                <option value="customer1">John Doe</option>
                                <option value="customer2">Jane Smith</option>
                                <option value="customer3">Mike Johnson</option>
                            </select>
                        </div>

                        <div className="form-field">
                            <label>Sales Officer</label>
                            <select
                                name="salesOfficer"
                                value={formData.salesOfficer}
                                onChange={handleInputChange}
                                className="form-select"
                            >
                                <option value="">Sales Officer</option>
                                <option value="officer1">Sarah Wilson</option>
                                <option value="officer2">Tom Brown</option>
                                <option value="officer3">Lisa Davis</option>
                            </select>
                        </div>

                        {/* Row 2 */}
                        <div className="form-field">
                            <label>Currency</label>
                            <div className="currency-field">
                                <select
                                    name="currency"
                                    value={formData.currency}
                                    onChange={handleInputChange}
                                    className="form-select"
                                >
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                    <option value="EGP">EGP</option>
                                </select>
                                <span className="clear-icon">×</span>
                            </div>
                        </div>

                        <div className="form-field">
                            <label>Follow Up</label>
                            <select
                                name="followUp"
                                value={formData.followUp}
                                onChange={handleInputChange}
                                className="form-select"
                            >
                                <option value="">Select Status</option>
                                <option value="pending">Pending</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>

                        <div className="form-field">
                            <label>Branch</label>
                            <select
                                name="branch"
                                value={formData.branch}
                                onChange={handleInputChange}
                                className="form-select"
                            >
                                <option value="">Branch</option>
                                <option value="main">Main Branch</option>
                                <option value="downtown">Downtown</option>
                                <option value="airport">Airport</option>
                            </select>
                        </div>

                        {/* Row 3 */}
                        <div className="form-field">
                            <label>Date Of Reservation</label>
                            <div className="date-field">
                                <input
                                    type="date"
                                    name="checkInDate"
                                    value={formData.checkInDate}
                                    onChange={handleInputChange}
                                    className="form-input"
                                />
                                <span className="clear-icon">×</span>
                                <span className="calendar-icon">📅</span>
                            </div>
                        </div>

                        <div className="form-field">
                            <label>NO. Reservation</label>
                            <input
                                type="text"
                                name="reservationNumber"
                                value={formData.reservationNumber}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Auto-generated"
                            />
                        </div>

                        <div className="form-field checkbox-field">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    name="hideVat"
                                    checked={formData.hideVat}
                                    onChange={handleInputChange}
                                    className="form-checkbox"
                                />
                                Hide Vat
                            </label>
                        </div>

                        {/* Row 4 - Notes */}
                        <div className="form-field full-width">
                            <label>Notes Of Reservation</label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleInputChange}
                                className="form-textarea"
                                rows="4"
                                placeholder="Enter any special notes or requests..."
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
                            Add file
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AppNewReservation;