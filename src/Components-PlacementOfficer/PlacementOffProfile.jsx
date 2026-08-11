import React from "react";
import "./PlacementOffProfile.css";

import EduhireLogo from "../assets/POAssets/EduhireLogo.png";
import Expand from "../assets/POAssets/Expand.png";
import DashboardIcon from "../assets/POAssets/Dashboard.png";
import StudentManagementIcon from "../assets/POAssets/StudentManagement.png";
import CompanyManagementIcon from "../assets/POAssets/CompanyManagement.png";
import PlacementDriveIcon from "../assets/POAssets/PlacementDrive.png";
import InterviewManagementIcon from "../assets/POAssets/InterviewManagement.png";
import ApplicationsIcon from "../assets/POAssets/Applications.png";
import ReportsIcon from "../assets/POAssets/Reports.png";
import ProfileIcon from "../assets/POAssets/Profile.png";
import SettingsIcon from "../assets/POAssets/Settings.png";
import SupportIcon from "../assets/POAssets/Support.png";
import LogoutIcon from "../assets/POAssets/Logout.png";
import SearchIcon from "../assets/POAssets/SearchIcon.png";
import NotificationsIcon from "../assets/POAssets/Notifications.png";
import MessagesIcon from "../assets/POAssets/Messages.png";
import ProfileImage from "../assets/POAssets/ProfileImage.png";
import ProfileCard from "../assets/POAssets/ProfileCard.png";
import EditProfileIcon from "../assets/POAssets/EditProfile.png";
import PersonalInformationIcon from "../assets/POAssets/PersonalInformation.png";
import InstituteDetailsIcon from "../assets/POAssets/InstituteDetails.png";
import ProfessionalInformationIcon from "../assets/POAssets/ProfessionalInformation.png";
import DocumentsIcon from "../assets/POAssets/Documents.png";
import PdfIcon from "../assets/POAssets/PdfIcon.png";

const placementOffProfileNavItems = [
  { label: "Dashboard", icon: DashboardIcon },
  { label: "Student Management", icon: StudentManagementIcon },
  { label: "Company Management", icon: CompanyManagementIcon },
  { label: "Placement Drive", icon: PlacementDriveIcon },
  { label: "Interview Management", icon: InterviewManagementIcon },
  { label: "Applications", icon: ApplicationsIcon },
  { label: "Reports", icon: ReportsIcon },
  { label: "Profile", icon: ProfileIcon },
  { label: "Settings", icon: SettingsIcon },
  { label: "Support", icon: SupportIcon },
];

const PlacementOffProfile = () => {
  return (
    <div className="placementOffProfile">
      {/* LEFT SIDEBAR - fixed, non-scrollable (unchanged) */}
      <aside className="placementOffProfileSidebar">
        <div className="placementOffProfileLogoRow">
          <div className="placementOffProfileLogoGroup">
            <img
              src={EduhireLogo}
              alt="Eduhire"
              className="placementOffProfileLogoIcon"
            />
            <span className="placementOffProfileLogoText">EDUHIRE</span>
          </div>
          <img
            src={Expand}
            alt="Expand"
            className="placementOffProfileExpandIcon"
          />
        </div>

        <nav className="placementOffProfileNavigation">
          {placementOffProfileNavItems.map((item) => (
            <div
              key={item.label}
              className={`placementOffProfileNavItem${
                item.label === "Profile"
                  ? " placementOffProfileNavItemActive"
                  : ""
              }`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="placementOffProfileNavIcon"
              />
              <span className="placementOffProfileNavLabel">
                {item.label}
              </span>
            </div>
          ))}
        </nav>

        <div className="placementOffProfileNavItem placementOffProfileLogoutItem">
          <img
            src={LogoutIcon}
            alt="Logout"
            className="placementOffProfileNavIcon"
          />
          <span className="placementOffProfileNavLabel">Logout</span>
        </div>
      </aside>
      
      <main className="placementOffProfileMain">
        <div className="placementOffProfileContent">
          {/* TOP HEADER */}
          <header className="placementOffProfileHeader">
            <div className="placementOffProfileSearchBar">
              <img
                src={SearchIcon}
                alt="Search"
                className="placementOffProfileSearchIcon"
              />
              <input
                type="text"
                placeholder="Search companies, drives...,"
                className="placementOffProfileSearchInput"
              />
            </div>

            <div className="placementOffProfileHeaderRight">
              <div className="placementOffProfileIconButton">
                <img
                  src={NotificationsIcon}
                  alt="Notifications"
                  className="placementOffProfileHeaderIcon"
                />
                <span className="placementOffProfileBadge">5</span>
              </div>

              <div className="placementOffProfileIconButton">
                <img
                  src={MessagesIcon}
                  alt="Messages"
                  className="placementOffProfileHeaderIcon"
                />
                <span className="placementOffProfileBadge">3</span>
              </div>

              <div className="placementOffProfileUser">
                <img
                  src={ProfileImage}
                  alt="Priyanka"
                  className="placementOffProfileUserImage"
                />
                <div className="placementOffProfileUserInfo">
                  <span className="placementOffProfileUserName">
                    Priyanka
                  </span>
                  <span className="placementOffProfileUserRole">
                    Placement Officer
                  </span>
                </div>
              </div>
            </div>
          </header>

         
          <div className="placementOffProfileTitleSection">
            <h1 className="placementOffProfileTitle">My Profile</h1>
            <p className="placementOffProfileSubtitle">
              Manage Your personal information, preferences &amp; view your
              performance.
            </p>
          </div>

          <div className="placementOffProfileGrid">
           <div className="placementOffProfileLeftColumn">
              <div className="placementOffProfileProfileCardWrapper">
                <div className="placementOffProfileProfileCard">
                  <img
                    src={ProfileCard}
                    alt="Priyanka - Placement Officer"
                    className="placementOffProfileProfileCardImage"
                  />
                  <h2 className="placementOffProfileProfileCardName">
                    Priyanka
                  </h2>
                  <p className="placementOffProfileProfileCardRole">
                    Placement Officer
                  </p>
                </div>

                <button type="button" className="placementOffProfileEditButton">
                  <img
                    src={EditProfileIcon}
                    alt="Edit Profile"
                    className="placementOffProfileEditIcon"
                  />
                  Edit Profile
                </button>
              </div>

              <div className="placementOffProfileCard placementOffProfileProfessionalCard">
                <div className="placementOffProfileCardHeader">
                  <img
                    src={ProfessionalInformationIcon}
                    alt="Professional Information"
                    className="placementOffProfileCardHeaderIcon"
                  />
                  <h3 className="placementOffProfileCardTitle">
                    Professional Information
                  </h3>
                </div>

                <div className="placementOffProfileFieldStack">
                  <div className="placementOffProfileField">
                    <span className="placementOffProfileFieldLabel">
                      Employee Id
                    </span>
                    <span className="placementOffProfileFieldValue">
                      PO-2024-2349
                    </span>
                  </div>
                  <div className="placementOffProfileField">
                    <span className="placementOffProfileFieldLabel">
                      Joined On
                    </span>
                    <span className="placementOffProfileFieldValue">
                      Apr 15, 2024
                    </span>
                  </div>
                  <div className="placementOffProfileField">
                    <span className="placementOffProfileFieldLabel">
                      Designation
                    </span>
                    <span className="placementOffProfileFieldValue">
                      Placement Officer
                    </span>
                  </div>
                  <div className="placementOffProfileField">
                    <span className="placementOffProfileFieldLabel">
                      Experience
                    </span>
                    <span className="placementOffProfileFieldValue">
                      6+ years
                    </span>
                  </div>
                  <div className="placementOffProfileField">
                    <span className="placementOffProfileFieldLabel">
                      Institute Address
                    </span>
                    <span className="placementOffProfileFieldValue">
                      745 OMR road ,Chennai - 105215
                    </span>
                  </div>
                </div>
              </div>
            </div>

           
            <div className="placementOffProfileRightColumn">
              <div className="placementOffProfileCard placementOffProfilePersonalCard">
                <div className="placementOffProfileCardHeader">
                  <img
                    src={PersonalInformationIcon}
                    alt="Personal Information"
                    className="placementOffProfileCardHeaderIcon"
                  />
                  <h3 className="placementOffProfileCardTitle">
                    Personal Information
                  </h3>
                </div>

                <div className="placementOffProfileFieldGrid placementOffProfileFieldGridThree">
                  <div className="placementOffProfileField">
                    <span className="placementOffProfileFieldLabel">Name</span>
                    <span className="placementOffProfileFieldValue">
                      Priyanka J
                    </span>
                  </div>
                  <div className="placementOffProfileField">
                    <span className="placementOffProfileFieldLabel">
                      Date of birth
                    </span>
                    <span className="placementOffProfileFieldValue">
                      October 14, 1988
                    </span>
                  </div>
                  <div className="placementOffProfileField">
                    <span className="placementOffProfileFieldLabel">Email</span>
                    <span className="placementOffProfileFieldValue">
                      priya5@eduhire.com
                    </span>
                  </div>
                </div>

                <div className="placementOffProfileFieldGrid placementOffProfileFieldGridTwo">
                  <div className="placementOffProfileField">
                    <span className="placementOffProfileFieldLabel">
                      Gender
                    </span>
                    <span className="placementOffProfileFieldValue">
                      Female
                    </span>
                  </div>
                  <div className="placementOffProfileField">
                    <span className="placementOffProfileFieldLabel">
                      Phone no
                    </span>
                    <span className="placementOffProfileFieldValue">
                      +1 (555) 012-3456
                    </span>
                  </div>
                </div>

                <div className="placementOffProfileFieldGrid placementOffProfileFieldGridOne">
                  <div className="placementOffProfileField">
                    <span className="placementOffProfileFieldLabel">
                      Address
                    </span>
                    <span className="placementOffProfileFieldValue">
                      745 ECR road ,Chennai - 100010
                    </span>
                  </div>
                </div>
              </div>

              <div className="placementOffProfileCard placementOffProfileInstituteCard">
                <div className="placementOffProfileCardHeader">
                  <img
                    src={InstituteDetailsIcon}
                    alt="Institute Details"
                    className="placementOffProfileCardHeaderIcon"
                  />
                  <h3 className="placementOffProfileCardTitle">
                    Institute Details
                  </h3>
                </div>

                <div className="placementOffProfileFieldGrid placementOffProfileFieldGridOne">
                  <div className="placementOffProfileField">
                    <span className="placementOffProfileFieldLabel">
                      College/University
                    </span>
                    <span className="placementOffProfileFieldValue">
                      Govt. Eng. College, CBE
                    </span>
                  </div>
                </div>

                <div className="placementOffProfileFieldGrid placementOffProfileFieldGridTwo">
                  <div className="placementOffProfileField">
                    <span className="placementOffProfileFieldLabel">
                      Affiliated University
                    </span>
                    <span className="placementOffProfileFieldValue">
                      Anna University
                    </span>
                  </div>
                  <div className="placementOffProfileField">
                    <span className="placementOffProfileFieldLabel">
                      Institution Website
                    </span>
                    <span className="placementOffProfileFieldValue">
                      www.gec.in
                    </span>
                  </div>
                </div>

                <div className="placementOffProfileFieldGrid placementOffProfileFieldGridTwo">
                  <div className="placementOffProfileField">
                    <span className="placementOffProfileFieldLabel">
                      Phone no
                    </span>
                    <span className="placementOffProfileFieldValue">
                      +1 (555) 012-3456
                    </span>
                  </div>
                  <div className="placementOffProfileField">
                    <span className="placementOffProfileFieldLabel">
                      Institution Address
                    </span>
                    <span className="placementOffProfileFieldValue">
                      745 ECR road, Coimbatore - 100010
                    </span>
                  </div>
                </div>
              </div>

              <div className="placementOffProfileCard placementOffProfileDocumentsCard">
                <div className="placementOffProfileCardHeader">
                  <img
                    src={DocumentsIcon}
                    alt="Documents"
                    className="placementOffProfileCardHeaderIcon"
                  />
                  <h3 className="placementOffProfileCardTitle">Documents</h3>
                </div>

                <div className="placementOffProfileDocumentList">
                  <div className="placementOffProfileDocumentItem">
                    <div className="placementOffProfileDocumentInfo">
                      <img
                        src={PdfIcon}
                        alt="PDF"
                        className="placementOffProfileDocumentIcon"
                      />
                      <span className="placementOffProfileDocumentName">
                        Employee ID Card
                      </span>
                    </div>
                    <button
                      type="button"
                      className="placementOffProfileViewButton"
                    >
                      View
                    </button>
                  </div>

                  <div className="placementOffProfileDocumentItem">
                    <div className="placementOffProfileDocumentInfo">
                      <img
                        src={PdfIcon}
                        alt="PDF"
                        className="placementOffProfileDocumentIcon"
                      />
                      <span className="placementOffProfileDocumentName">
                        Appointment Letter
                      </span>
                    </div>
                    <button
                      type="button"
                      className="placementOffProfileViewButton"
                    >
                      View
                    </button>
                  </div>

                  <div className="placementOffProfileDocumentItem">
                    <div className="placementOffProfileDocumentInfo">
                      <img
                        src={PdfIcon}
                        alt="PDF"
                        className="placementOffProfileDocumentIcon"
                      />
                      <span className="placementOffProfileDocumentName">
                        Certificates
                      </span>
                    </div>
                    <button
                      type="button"
                      className="placementOffProfileViewButton"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlacementOffProfile;