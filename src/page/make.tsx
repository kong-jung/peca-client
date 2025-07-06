import React, { useState } from "react";
import styled from "@emotion/styled";
import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import image from "../assets/icon.png";

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

const make: React.FC = () => {
    const [step, setStep] = useState(1);
    // 기본 정보
    const [name, setName] = useState("");
    const [aff, setAff] = useState("");
    const [job, setJob] = useState("");
    const [quote, setQuote] = useState("");
    const [insta, setInsta] = useState("");
    const [github, setGithub] = useState("");
    const [mail, setMail] = useState("");
    // 활동 정보
    const [activityName, setActivityName] = useState("");
    const [activityPeriod, setActivityPeriod] = useState("");
    const [activityDesc, setActivityDesc] = useState("");

    return (
        <Container>
            <FormSection>
                {step === 1 ? (
                    <>
                        <div>
                            <Label>이름</Label>
                            <Input value={name} onChange={e => setName(e.target.value)} placeholder="이름을 입력하세요" empty={!name} />
                        </div>
                        <div>
                            <Label>소속</Label>
                            <Input value={aff} onChange={e => setAff(e.target.value)} placeholder="소속을 입력하세요" empty={!aff} />
                        </div>
                        <div>
                            <Label>직책</Label>
                            <Input value={job} onChange={e => setJob(e.target.value)} placeholder="직책을 입력하세요" empty={!job} />
                        </div>
                        <div>
                            <Label>인생의 좌우명</Label>
                            <Input value={quote} onChange={e => setQuote(e.target.value)} placeholder="좌우명을 입력하세요" empty={!quote} />
                        </div>
                        <div>
                            <Label>인스타</Label>
                            <Input value={insta} onChange={e => setInsta(e.target.value)} placeholder="인스타그램 주소를 입력하세요" empty={!insta} />
                        </div>
                        <div>
                            <Label>깃허브</Label>
                            <Input value={github} onChange={e => setGithub(e.target.value)} placeholder="깃허브 주소를 입력하세요" empty={!github} />
                        </div>
                        <div>
                            <Label>메일</Label>
                            <Input value={mail} onChange={e => setMail(e.target.value)} placeholder="메일 주소를 입력하세요" empty={!mail} />
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <Label>활동 이름</Label>
                            <Input value={activityName} onChange={e => setActivityName(e.target.value)} placeholder="활동 이름을 입력하세요" empty={!activityName} />
                        </div>
                        <div>
                            <Label>활동 기간</Label>
                            <Input value={activityPeriod} onChange={e => setActivityPeriod(e.target.value)} placeholder="활동 기간을 입력하세요" empty={!activityPeriod} />
                        </div>
                        <div>
                            <Label>활동 소개</Label>
                            <Input value={activityDesc} onChange={e => setActivityDesc(e.target.value)} placeholder="활동 소개를 입력하세요" empty={!activityDesc} />
                        </div>
                    </>
                )}
            </FormSection>
            <CardSection>
                <Card>
                    <CardProfile>
                        <CardIcon><CardIconImage src={image} alt="icon" /></CardIcon>
                    </CardProfile>
                    <CardNameAff>
                        <CardName>{name || "이름"}</CardName>
                        <CardAff>{aff || "소속"}</CardAff>
                    </CardNameAff>
                    <CardJob><Image src={image} alt="icon" /> {job || "직책"}</CardJob>
                    <CardLinksWrap>
                        {insta && (
                            <CardLink href={insta.startsWith('http') ? insta : `https://instagram.com/${insta}`} target="_blank" rel="noopener noreferrer">
                                <FaInstagram /> 인스타
                            </CardLink>
                        )}
                        {github && (
                            <CardLink href={github.startsWith('http') ? github : `https://github.com/${github}`} target="_blank" rel="noopener noreferrer">
                                <FaGithub /> 깃허브
                            </CardLink>
                        )}
                        {mail && (
                            <CardLink href={`mailto:${mail}`}>
                                <FaEnvelope /> 메일
                            </CardLink>
                        )}
                    </CardLinksWrap>
                    <CardQuote>“{quote || "나의 좌우명"}”</CardQuote>
                    <CardActivity>
                        <CardActivityName>{activityName || "활동 이름"}</CardActivityName>
                        <CardActivityPeriod>{activityPeriod || "활동 기간"}</CardActivityPeriod>
                        <CardActivityDesc>{activityDesc || "활동 소개"}</CardActivityDesc>
                    </CardActivity>
                </Card>
                <NextButton onClick={() => step === 1 ? setStep(2) : null}>
                    {step === 1 ? "다음으로" : "완료"}
                </NextButton>
            </CardSection>
        </Container>
    );
};

export default make; 