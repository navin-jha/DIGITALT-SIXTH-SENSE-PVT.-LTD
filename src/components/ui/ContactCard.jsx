import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactCard = () => {
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_address: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [sending, setSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.user_name.trim()) {
            newErrors.user_name = "Name is required";
        }

        if (!formData.user_email.trim()) {
            newErrors.user_email = "Email is required";
        } else if (!validateEmail(formData.user_email)) {
            newErrors.user_email = "Enter valid email";
        }

        // 🔥 Address validation (NEW)
        if (!formData.user_address.trim()) {
            newErrors.user_address = "Address is required";
        } else if (formData.user_address.trim().length < 5) {
            newErrors.user_address = "Enter proper address";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            setSending(true);

            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            setStatusMessage("Message sent successfully ✅");

            setFormData({
                user_name: "",
                user_email: "",
                user_address: "",
                message: "",
            });

            setErrors({});
        } catch (error) {
            console.error(error);
            setStatusMessage("Failed to send ❌");
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="bg-white text-black rounded-2xl p-5 sm:p-7 border border-gray-200 shadow-md">
            <h3 className="text-2xl text-center font-semibold mb-5">
                Contact Us
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

                {/* Name */}
                <div>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Enter Your Name"
                        value={formData.user_name}
                        onChange={handleChange}
                        className={`w-full border rounded-md px-3 py-2.5 ${errors.user_name ? "border-red-500" : "border-gray-300"
                            }`}
                    />
                    {errors.user_name && (
                        <p className="text-red-500 text-sm">{errors.user_name}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Enter Your Email"
                        value={formData.user_email}
                        onChange={handleChange}
                        className={`w-full border rounded-md px-3 py-2.5 ${errors.user_email ? "border-red-500" : "border-gray-300"
                            }`}
                    />
                    {errors.user_email && (
                        <p className="text-red-500 text-sm">{errors.user_email}</p>
                    )}
                </div>

                {/* 🔥 Address Field (NEW) */}
                <div>
                    <input
                        type="text"
                        name="user_address"
                        placeholder="Enter Your Address"
                        value={formData.user_address}
                        onChange={handleChange}
                        className={`w-full border rounded-md px-3 py-2.5 ${errors.user_address ? "border-red-500" : "border-gray-300"
                            }`}
                    />
                    {errors.user_address && (
                        <p className="text-red-500 text-sm">{errors.user_address}</p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <textarea
                        name="message"
                        placeholder="Enter Your Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full border rounded-md px-3 py-2.5 ${errors.message ? "border-red-500" : "border-gray-300"
                            }`}
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm">{errors.message}</p>
                    )}
                </div>

                {/* Button */}
                <button
                    type="submit"
                    disabled={sending}
                    className={`w-full py-3 rounded-md text-white ${sending ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                        }`}
                >
                    {sending ? "Sending..." : "Send Message"}
                </button>

                {/* Status */}
                {statusMessage && (
                    <p className="text-center text-sm mt-2">
                        {statusMessage}
                    </p>
                )}
            </form>
        </div>
    );
};

export default ContactCard;