import React from 'react';
import HomeSIngleService from '../../../../components/HomeSIngleService/HomeSIngleService';
import { useTranslation } from 'react-i18next';

const ServicesOneABout = () => {
   const  {t} = useTranslation();
    return (
        <>
          <section className="about-area pt-120 pb-90">
             <div className="container">
                <div className="row ">
                   <div className="col-xl-6 col-lg-6 col-md-12">
                      <div className="section-title section-title-m-0 pos-rel mb-50 text-end">
                         <div className="section-icon">
                            <img className="section-back-icon back-icon-right" src="img/section/section-back-icon.png" alt=""/>
                         </div>
                         <div className="section-text section-text-small pos-rel">
                            <h5>{t("health_care_facility_key")}</h5>
                            <h1>{t("stay_at_home_key")}</h1>
                         </div>
                      </div>
                   </div>
                   <div className="col-xl-6 col-lg-6 col-md-12">
                      <div className="facalty-text mb-50">
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                            omnis iste natus error sit voluptatem accusantium.</p>
                      </div>
                   </div>
                </div>
                <div className="row">
                  <h3>{t("services_description_key")}</h3>
                  <HomeSIngleService icon="1" title={t('therapeutic_key')} />
                  <HomeSIngleService icon="2" title={t('pediatric_key')} />
                  <HomeSIngleService icon="3" title={t('womens_consultation_key')} />
                  <h3>{t("diagnostic_services_key")}</h3>
                  <HomeSIngleService icon="4" title={t("x_ray_cabinet_key")} border_className="service-box-border" />
                  <HomeSIngleService icon="5" title={t("fluorography_cabinet_key")} border_className="service-box-border" />
                  <HomeSIngleService icon="6" title={t("ecg_cabinet_key")} border_className="service-box-border" />
                  <HomeSIngleService icon="6" title={t("ultrasound_exam_cabinet_key")} border_className="service-box-border" />
                  <HomeSIngleService icon="6" title={t("echocardiography_key")} border_className="service-box-border" />
                  <HomeSIngleService icon="6" title={t("electromyography_key")} border_className="service-box-border" />
                  <HomeSIngleService icon="6" title={t("autorefractor_key")} border_className="service-box-border" />
                  <h3>{t("paid_services_key")}</h3>
                  <HomeSIngleService icon="6" title={t("physiotherapy_cabinet_key")} border_className="service-box-border" />
                  <HomeSIngleService icon="6" title={t("massage_cabinet_key")} border_className="service-box-border" />
                  <HomeSIngleService icon="6" title={t("intravenous_laser_therapy_key")} border_className="service-box-border" />
                  <HomeSIngleService icon="6" title={t("eye_device_treatment_key")} border_className="service-box-border" />
                  <HomeSIngleService icon="6" title={t("gastroenterology_cabinet_key")} border_className="service-box-border" />
                  <HomeSIngleService icon="6" title={t("urology_cabinet_key")} border_className="service-box-border" />
                  <HomeSIngleService icon="6" title={t("dentistry_cabinet_key")} border_className="service-box-border" />

                  
                  {/* <HomeSIngleService icon="4" title={t("blood_cancer_key")} border_className="service-box-border" /> */}
                  {/* <HomeSIngleService icon="5" title={t("neurology_surgery_key")} border_className="service-box-border" /> */}
                  {/* <HomeSIngleService icon="6" title={t("allergic_issue_key")} border_className="service-box-border" /> */}
                </div>
             </div>
          </section>
        </>
    );
};

export default ServicesOneABout;