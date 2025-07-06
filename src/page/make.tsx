import React from "react";
import styled from "@emotion/styled";
import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import image from "../assets/icon.png";
import { useCardStore } from "../store/cardStore";
import { supabase } from "../supabaseClient";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  padding-top: 40px;
  gap: 180px;
  max-width: 1600px;
  margin: 0 auto;
`;

const FormSection = styled.div`
  flex: 1;
  width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Label = styled.label`
  font-size: 18px;
  color: #222;
  margin-bottom: 8px;
`;

const Input = styled.input<{ empty?: boolean }>`
  width: 100%;
  height: 48px;
  border: 2px solid #bcbcff;
  border-radius: 8px;
  padding: 0 16px;
  font-size: 18px;
  background: ${props => props.empty ? '#f2f2f2' : '#fff'};
  margin-bottom: 8px;
  outline: none;
`;

const CardSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  width: 500px;
  height: 600px;
  background: radial-gradient(ellipse at 70% 30%, #6a8dff 60%, #bcbcff 100%);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 24px 16px 16px 16px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

const CardProfile = styled.div`
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120px;
`;

const CardIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #f2f2f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: #bcbcff;
  margin-bottom: 8px;
`;

const CardIconImage = styled.img`
  width: 64px;
  height: 64px;
`;

const CardNameAff = styled.div`
  display: flex;
  align-items: center;
  min-height: 48px;
  justify-content: flex-start;
  gap: 12px;
`;

const CardName = styled.div`
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 2px;
`;

const CardAff = styled.div`
  font-size: 18px;
  color: #e0e0ff;
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
`;

const CardJob = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin: 12px 0 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CardLinksWrap = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

const CardLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  color: #6a8dff;
  border-radius: 12px;
  padding: 4px 16px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s;
  &:hover {
    background: #e5d8ff;
  }
`;

const CardQuote = styled.div`
  margin: 18px 0 20px 0;
  font-size: 20px;
  color: #fff;
  text-align: center;
  width: 100%;
`;

const CardActivity = styled.div`
  background: rgba(255,255,255,0.3);
  border-radius: 12px;
  padding: 18px 20px;
  width: 90%;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardActivityName = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const CardActivityPeriod = styled.div`
  font-size: 14px;
  color: #e0e0ff;
  margin-bottom: 4px;
`;

const CardActivityDesc = styled.div`
  font-size: 15px;
  color: #fff;
  margin-bottom: 20px;
`;

const NextButton = styled.button`
  width: 300px;
  height: 64px;
  background: #fff;
  border: 2px solid #bcbcff;
  border-radius: 12px;
  color: #222;
  font-size: 24px;
  font-weight: 700;
  margin: 40px auto 0 auto;
  cursor: pointer;
  display: block;
`;

const ConfirmBox = styled.div`
  position: fixed;
  top: 40%;
  left: 60%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 40px 32px;
  z-index: 10;
`;
const ConfirmText = styled.div`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const ConfirmBtnWrap = styled.div`
  display: flex;
  gap: 24px;
`;
const ConfirmBtn = styled.button`
  width: 120px;
  height: 48px;
  border-radius: 8px;
  border: 2px solid #bcbcff;
  background: #fff;
  color: #222;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

const ConfirmOKBtn = styled.button`
  width: 120px;
  height: 48px;
  border-radius: 8px;
  background: #6a8dff;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  border: none;
`;

const CText = styled.div`
  font-size: 20px;
  margin-bottom: 50px;
  color: #6B6B6B;
`;

const make: React.FC = () => {
    const navigate = useNavigate();
    const {
        name, aff, job, quote, insta, github, mail,
        activityName, activityPeriod, activityDesc,
        setCard, resetCard
    } = useCardStore();
    const [step, setStep] = React.useState(1);

    // 입력값 임시 상태 (입력 중에는 zustand에 바로 저장하지 않음)
    const [form, setForm] = React.useState({
        name, aff, job, quote, insta, github, mail,
        activityName, activityPeriod, activityDesc
    });

    // 입력값 핸들러
    const handleChange = (key: keyof typeof form, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    // step1/2에서 form 값 사용, step3에서 zustand에 저장
    const handleNext = () => {
        if (step === 2) {
            setCard(form); // step2에서 step3로 넘어갈 때 zustand에 저장
        }
        setStep(step + 1);
    };
    
    const handleConfirm = async () => {
        setCard(form);
        
        // DB에 명함 저장
        try {
            const { error } = await supabase.from('card').insert([
                {
                    u_id: 'user1', // 임시 사용자 ID, 추후 로그인 시스템 구현 시 변경
                    u_name: form.name,
                    affiliation: form.aff,
                    job: form.job,
                    url1: form.insta,
                    url2: form.github,
                    moto: form.quote,
                    color: 1 // 기본 색상값
                }
            ]);
            
            if (error) {
                console.error('명함 저장 실패:', error);
                alert('명함 저장에 실패했습니다.');
            } else {
                console.log('명함이 DB에 성공적으로 저장되었습니다!');
            }
        } catch (error) {
            console.error('명함 저장 중 오류 발생:', error);
            alert('명함 저장 중 오류가 발생했습니다.');
        }
        
        setStep(4);
    };
    
    const handleCancel = () => {
        resetCard();
        setForm({
            name: '', aff: '', job: '', quote: '', insta: '', github: '', mail: '',
            activityName: '', activityPeriod: '', activityDesc: ''
        });
        setStep(1);
    };

    return (
        <Container style={step === 3 ? { justifyContent: 'flex-start' } : {}}>
            {step < 3 && (
                <FormSection>
                    {step === 1 ? (
                        <>
                            <div>
                                <Label>이름</Label>
                                <Input value={form.name} onChange={e => handleChange('name', e.target.value)} placeholder="이름을 입력하세요" empty={!form.name} />
                            </div>
                            <div>
                                <Label>소속</Label>
                                <Input value={form.aff} onChange={e => handleChange('aff', e.target.value)} placeholder="소속을 입력하세요" empty={!form.aff} />
                            </div>
                            <div>
                                <Label>직책</Label>
                                <Input value={form.job} onChange={e => handleChange('job', e.target.value)} placeholder="직책을 입력하세요" empty={!form.job} />
                            </div>
                            <div>
                                <Label>인생의 좌우명</Label>
                                <Input value={form.quote} onChange={e => handleChange('quote', e.target.value)} placeholder="좌우명을 입력하세요" empty={!form.quote} />
                            </div>
                            <div>
                                <Label>인스타</Label>
                                <Input value={form.insta} onChange={e => handleChange('insta', e.target.value)} placeholder="인스타그램 주소를 입력하세요" empty={!form.insta} />
                            </div>
                            <div>
                                <Label>깃허브</Label>
                                <Input value={form.github} onChange={e => handleChange('github', e.target.value)} placeholder="깃허브 주소를 입력하세요" empty={!form.github} />
                            </div>
                            <div>
                                <Label>메일</Label>
                                <Input value={form.mail} onChange={e => handleChange('mail', e.target.value)} placeholder="메일 주소를 입력하세요" empty={!form.mail} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <Label>활동 이름</Label>
                                <Input value={form.activityName} onChange={e => handleChange('activityName', e.target.value)} placeholder="활동 이름을 입력하세요" empty={!form.activityName} />
                            </div>
                            <div>
                                <Label>활동 기간</Label>
                                <Input value={form.activityPeriod} onChange={e => handleChange('activityPeriod', e.target.value)} placeholder="활동 기간을 입력하세요" empty={!form.activityPeriod} />
                            </div>
                            <div>
                                <Label>활동 소개</Label>
                                <Input value={form.activityDesc} onChange={e => handleChange('activityDesc', e.target.value)} placeholder="활동 소개를 입력하세요" empty={!form.activityDesc} />
                            </div>
                        </>
                    )}
                </FormSection>
            )}
            <CardSection style={step === 3 || 4 ? { alignItems: 'flex-start' } : {}}>
                <Card>
                    <CardProfile>
                        <CardIcon><CardIconImage src={image} alt="icon" /></CardIcon>
                    </CardProfile>
                    <CardNameAff>
                        <CardName>{step < 3 ? form.name || "이름" : name || "이름"}</CardName>
                        <CardAff>{step < 3 ? form.aff || "소속" : aff || "소속"}</CardAff>
                    </CardNameAff>
                    <CardJob>{step < 3 ? form.job || "직책" : job || "직책"}</CardJob>
                    <CardLinksWrap>
                        {(step < 3 ? form.insta : insta) && (
                            <CardLink href={(step < 3 ? form.insta : insta).startsWith('http') ? (step < 3 ? form.insta : insta) : `https://instagram.com/${step < 3 ? form.insta : insta}`} target="_blank" rel="noopener noreferrer">
                                <FaInstagram /> 인스타
                            </CardLink>
                        )}
                        {(step < 3 ? form.github : github) && (
                            <CardLink href={(step < 3 ? form.github : github).startsWith('http') ? (step < 3 ? form.github : github) : `https://github.com/${step < 3 ? form.github : github}`} target="_blank" rel="noopener noreferrer">
                                <FaGithub /> 깃허브
                            </CardLink>
                        )}
                        {(step < 3 ? form.mail : mail) && (
                            <CardLink href={`mailto:${step < 3 ? form.mail : mail}`}>
                                <FaEnvelope /> 메일
                            </CardLink>
                        )}
                    </CardLinksWrap>
                    <CardQuote>“{step < 3 ? form.quote || "나의 좌우명" : quote || "나의 좌우명"}”</CardQuote>
                    <CardActivity>
                        <CardActivityName>{step < 3 ? form.activityName || "활동 이름" : activityName || "활동 이름"}</CardActivityName>
                        <CardActivityPeriod>{step < 3 ? form.activityPeriod || "활동 기간" : activityPeriod || "활동 기간"}</CardActivityPeriod>
                        <CardActivityDesc>{step < 3 ? form.activityDesc || "활동 소개" : activityDesc || "활동 소개"}</CardActivityDesc>
                    </CardActivity>
                </Card>
                {step === 1 && (
                    <NextButton onClick={handleNext}>다음으로</NextButton>
                )}
                {step === 2 && (
                    <NextButton onClick={handleNext}>완료</NextButton>
                )}
            </CardSection>
            {step === 3 && (
                <ConfirmBox>
                    <ConfirmText>이대로 명함을 만드시겠습니까?</ConfirmText>
                    <ConfirmBtnWrap>
                        <ConfirmBtn onClick={handleCancel}>취소</ConfirmBtn>
                        <ConfirmOKBtn onClick={handleConfirm}>네</ConfirmOKBtn>
                    </ConfirmBtnWrap>
                </ConfirmBox>
            )}
            {step === 4 && (
                <ConfirmBox>
                    <ConfirmText>명함이 생성되었습니다!</ConfirmText>
                    <CText>마크다운 형식의 명함을 복사하여 여러곳에 넣어보세요</CText>
                    <ConfirmBtnWrap>
                        <ConfirmBtn onClick={handleCancel}>취소</ConfirmBtn>
                        <ConfirmOKBtn onClick={() => navigate('/')}>네</ConfirmOKBtn>
                    </ConfirmBtnWrap>
                </ConfirmBox>
            )}
        </Container>
    );
};

export default make; 