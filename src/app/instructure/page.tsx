"use client";

import React, { useState } from "react";

import Button from "@/components/common/button";
import Layout from "@/components/common/Layout";
import Table from "@/components/common/table";
import Modal from "@/components/common/Modal";

interface Instructure {
  no: number;
  fullName: string;
  phoneNumber: string;
  proficiency: string;
}

interface Column {
  header: string;
  accessor: keyof Instructure | ((data: Instructure) => React.ReactNode);
  className?: string;
}

const InstructurePage = () => {
  const instructures = [
    {
      no: 1,
      fullName: "Sandero Taeil Ishara",
      phoneNumber: "0895-1525-4981", 
      proficiency: "Programming",
    },
    {
      no: 2,
      fullName: "Mikael Ferdinand",
      phoneNumber: "0895-1525-4981",
      proficiency: "Programming",
    },
    {
      no: 3,
      fullName: "Swara Ajeng Mahesa",
      phoneNumber: "0895-1525-4981",
      proficiency: "Programming",
    },
    {
      no: 4,
      fullName: "Dywantara Suroso",
      phoneNumber: "0895-1525-4981",
      proficiency: "Programming",
    },
    {
      no: 5,
      fullName: "Budi Santoso",
      phoneNumber: "0812-3456-7890",
      proficiency: "Web Development",
    },
    {
      no: 6,
      fullName: "Siti Rahayu",
      phoneNumber: "0813-2345-6789",
      proficiency: "Data Science",
    },
    {
      no: 7,
      fullName: "Ahmad Wijaya",
      phoneNumber: "0814-3456-7890",
      proficiency: "Mobile Development",
    },
    {
      no: 8,
      fullName: "Dewi Kusuma",
      phoneNumber: "0815-4567-8901",
      proficiency: "UI/UX Design",
    },
    {
      no: 9,
      fullName: "Eko Prasetyo",
      phoneNumber: "0816-5678-9012",
      proficiency: "Programming",
    },
    {
      no: 10,
      fullName: "Rina Wati",
      phoneNumber: "0817-6789-0123",
      proficiency: "Web Development",
    },
    {
      no: 11,
      fullName: "Joko Susilo",
      phoneNumber: "0818-7890-1234",
      proficiency: "Data Science",
    },
    {
      no: 12,
      fullName: "Maya Sari",
      phoneNumber: "0819-8901-2345",
      proficiency: "Mobile Development",
    },
    {
      no: 13,
      fullName: "Agus Setiawan",
      phoneNumber: "0820-9012-3456",
      proficiency: "UI/UX Design",
    },
    {
      no: 14,
      fullName: "Nina Indah",
      phoneNumber: "0821-0123-4567",
      proficiency: "Programming",
    },
    {
      no: 15,
      fullName: "Rudi Hartono",
      phoneNumber: "0822-1234-5678",
      proficiency: "Web Development",
    },
    {
      no: 16,
      fullName: "Sri Wahyuni",
      phoneNumber: "0823-2345-6789",
      proficiency: "Data Science",
    },
    {
      no: 17,
      fullName: "Bambang Tri",
      phoneNumber: "0824-3456-7890",
      proficiency: "Mobile Development",
    },
    {
      no: 18,
      fullName: "Lina Putri",
      phoneNumber: "0825-4567-8901",
      proficiency: "UI/UX Design",
    },
    {
      no: 19,
      fullName: "Dedi Kurniawan",
      phoneNumber: "0826-5678-9012",
      proficiency: "Programming",
    },
    {
      no: 20,
      fullName: "Yuni Astuti",
      phoneNumber: "0827-6789-0123",
      proficiency: "Web Development",
    },
    {
      no: 21,
      fullName: "Hendra Gunawan",
      phoneNumber: "0828-7890-1234",
      proficiency: "Data Science",
    },
    {
      no: 22,
      fullName: "Lia Permata",
      phoneNumber: "0829-8901-2345",
      proficiency: "Mobile Development",
    },
    {
      no: 23,
      fullName: "Doni Pratama",
      phoneNumber: "0830-9012-3456",
      proficiency: "UI/UX Design",
    },
    {
      no: 24,
      fullName: "Ratna Sari",
      phoneNumber: "0831-0123-4567",
      proficiency: "Programming",
    },
    {
      no: 25,
      fullName: "Irfan Hakim",
      phoneNumber: "0832-1234-5678",
      proficiency: "Web Development",
    },
    {
      no: 26,
      fullName: "Putri Wulandari",
      phoneNumber: "0833-2345-6789",
      proficiency: "Data Science",
    },
    {
      no: 27,
      fullName: "Rizki Ramadhan",
      phoneNumber: "0834-3456-7890",
      proficiency: "Mobile Development",
    },
    {
      no: 28,
      fullName: "Dina Maulida",
      phoneNumber: "0835-4567-8901",
      proficiency: "UI/UX Design",
    },
    {
      no: 29,
      fullName: "Fajar Nugroho",
      phoneNumber: "0836-5678-9012",
      proficiency: "Programming",
    },
    {
      no: 30,
      fullName: "Anita Lestari",
      phoneNumber: "0837-6789-0123",
      proficiency: "Web Development",
    },
    {
      no: 31,
      fullName: "Adi Purnomo",
      phoneNumber: "0838-7890-1234",
      proficiency: "Data Science",
    },
    {
      no: 32,
      fullName: "Sari Indah",
      phoneNumber: "0839-8901-2345",
      proficiency: "Mobile Development",
    },
    {
      no: 33,
      fullName: "Tono Wijaya",
      phoneNumber: "0840-9012-3456",
      proficiency: "UI/UX Design",
    },
    {
      no: 34,
      fullName: "Rina Fitriani",
      phoneNumber: "0841-0123-4567",
      proficiency: "Programming",
    },
    {
      no: 35,
      fullName: "Bima Sakti",
      phoneNumber: "0842-1234-5678",
      proficiency: "Web Development",
    },
    {
      no: 36,
      fullName: "Eva Mariana",
      phoneNumber: "0843-2345-6789",
      proficiency: "Data Science",
    },
    {
      no: 37,
      fullName: "Reza Pahlepi",
      phoneNumber: "0844-3456-7890",
      proficiency: "Mobile Development",
    },
    {
      no: 38,
      fullName: "Desi Ratnasari",
      phoneNumber: "0845-4567-8901",
      proficiency: "UI/UX Design",
    },
    {
      no: 39,
      fullName: "Surya Darma",
      phoneNumber: "0846-5678-9012",
      proficiency: "Programming",
    },
    {
      no: 40,
      fullName: "Nita Handayani",
      phoneNumber: "0847-6789-0123",
      proficiency: "Web Development",
    },
    {
      no: 41,
      fullName: "Ari Wibowo",
      phoneNumber: "0848-7890-1234",
      proficiency: "Data Science",
    },
    {
      no: 42,
      fullName: "Mega Puspita",
      phoneNumber: "0849-8901-2345",
      proficiency: "Mobile Development",
    },
    {
      no: 43,
      fullName: "Candra Wijaya",
      phoneNumber: "0850-9012-3456",
      proficiency: "UI/UX Design",
    },
    {
      no: 44,
      fullName: "Laras Ayu",
      phoneNumber: "0851-0123-4567",
      proficiency: "Programming",
    },
    {
      no: 45,
      fullName: "Galih Pratama",
      phoneNumber: "0852-1234-5678",
      proficiency: "Web Development",
    },
    {
      no: 46,
      fullName: "Indah Permata",
      phoneNumber: "0853-2345-6789",
      proficiency: "Data Science",
    },
    {
      no: 47,
      fullName: "Rama Putra",
      phoneNumber: "0854-3456-7890",
      proficiency: "Mobile Development",
    },
    {
      no: 48,
      fullName: "Nadia Safitri",
      phoneNumber: "0855-4567-8901",
      proficiency: "UI/UX Design",
    },
    {
      no: 49,
      fullName: "Bayu Segara",
      phoneNumber: "0856-5678-9012",
      proficiency: "Programming",
    },
    {
      no: 50,
      fullName: "Kartika Sari",
      phoneNumber: "0857-6789-0123",
      proficiency: "Web Development",
    },
  ];

  const proficiencyCategories = [
    "Programming",
    "Web Development", 
    "Data Science",
    "Mobile Development",
    "UI/UX Design",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newInstructure, setNewInstructure] = useState({
    fullName: "",
    phoneNumber: "",
    proficiency: "",
  });
  const [selectedProficiency, setSelectedProficiency] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredInstructures =
    selectedProficiency === "all"
      ? instructures
      : instructures.filter(
          (instructure) => instructure.proficiency === selectedProficiency
        );

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredInstructures.slice(indexOfFirstItem, indexOfLastItem);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewInstructure((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setNewInstructure({
      fullName: "",
      phoneNumber: "",
      proficiency: "",
    });
  };

  const columns: Column[] = [
    { 
      header: "NO", 
      accessor: "no",
      className: "w-12 text-center"
    },
    { 
      header: "Full Name", 
      accessor: (data: Instructure) => (
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <span className="text-xs">{data.fullName}</span>
        </div>
      ),
      className: "min-w-[200px]"
    },
    { 
      header: "Phone Number", 
      accessor: (data: Instructure) => (
        <span className="text-xs">{data.phoneNumber}</span>
      ),
      className: "min-w-[120px]"
    },
    { 
      header: "Proficiency", 
      accessor: (data: Instructure) => (
        <span className="text-xs">{data.proficiency}</span>
      ),
      className: "min-w-[120px]"
    },
    {
      header: "Action",
      accessor: () => (
        <div className="flex gap-1 justify-center">
          <button
            className="p-1 border rounded hover:bg-gray-100"
            title="View History"
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="#374151"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button
            className="p-1 border rounded hover:bg-gray-100"
            title="Edit"
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="#374151"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
          <button
            className="p-1 border rounded hover:bg-gray-100"
            title="Delete"
          >
            <svg
              className="w-3 h-3 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      ),
      className: "w-24 text-center"
    },
  ];

  return (
    <Layout>
      <div className="p-2">
        <h1 className="text-lg md:text-xl text-gray-700 mb-2">
          Instructure
        </h1>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-2">
          <div>
            <Button
              variant="primary"
              size="small"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto text-xs"
            >
              Add New Instructure
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <select
              value={selectedProficiency}
              onChange={(e) => setSelectedProficiency(e.target.value)}
              className="px-2 py-1 text-xs border rounded-lg w-full sm:w-auto"
            >
              <option value="all">All Proficiencies</option>
              {proficiencyCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 text-xs border rounded-lg w-full sm:w-auto"
            />
          </div>
        </div>

        <div className="overflow-x-auto -mx-2 px-2">
          <Table
            columns={columns}
            data={currentItems}
            currentPage={currentPage}
            totalPages={Math.ceil(filteredInstructures.length / itemsPerPage)}
            itemsPerPage={itemsPerPage}
            totalItems={filteredInstructures.length}
            onPageChange={setCurrentPage}
          />
        </div>

        {/* Add Instructure Modal */}
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <div className="w-full">
              <h2 className="text-base font-semibold mb-2 text-gray-700">
                Add New Instructure
              </h2>
              <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={newInstructure.fullName}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 text-xs border rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={newInstructure.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 text-xs border rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Proficiency
                  </label>
                  <select
                    name="proficiency"
                    value={newInstructure.proficiency}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 text-xs border rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select Proficiency</option>
                    {proficiencyCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <Button
                    variant="gray"
                    size="small"
                    onClick={() => setIsModalOpen(false)}
                    className="text-xs px-2 py-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    size="small"
                    type="submit"
                    className="text-xs px-2 py-1"
                  >
                    Add Instructure
                  </Button>
                </div>
              </form>
            </div>
          </Modal>
        )}
      </div>
    </Layout>
  );
};

export default InstructurePage;
