import pandas as pd
import os

def load_and_save_excel():
    """
    엑셀 파일을 불러오고, 내용을 출력한 후 새로운 엑셀 파일을 저장하는 함수
    """
    # 현재 작업 디렉토리 출력
    print(f"현재 작업 디렉토리: {os.getcwd()}")
    
    # 파일 경로 설정 (실제 파일 경로로 변경 필요)
    input_file_path = "input_data.xlsx"
    output_file_path = "output_data.xlsx"
    
    try:
        # 엑셀 파일 불러오기
        print(f"파일 불러오는 중: {input_file_path}")
        df = pd.read_excel(input_file_path)
        
        # 데이터프레임 기본 정보 출력
        print("\n데이터프레임 기본 정보:")
        print(f"행 수: {df.shape[0]}, 열 수: {df.shape[1]}")
        print("\n컬럼 목록:")
        for i, col in enumerate(df.columns):
            print(f"  {i+1}. {col}")
        
        # 데이터 미리보기 (처음 5행)
        print("\n데이터 미리보기 (처음 5행):")
        print(df.head())
        
        # 기본 통계 정보 (숫자형 컬럼만)
        print("\n기본 통계 정보:")
        print(df.describe())
        
        # 데이터 수정 예시 (새로운 컬럼 추가)
        df['새로운_컬럼'] = "샘플 데이터"
        
        # 수정된 데이터 저장
        print(f"\n수정된 데이터를 저장 중: {output_file_path}")
        df.to_excel(output_file_path, index=False)
        print(f"파일이 성공적으로 저장되었습니다: {output_file_path}")
        
        return df
    
    except FileNotFoundError:
        print(f"오류: 파일을 찾을 수 없습니다. '{input_file_path}'가 현재 디렉토리에 있는지 확인해주세요.")
    except Exception as e:
        print(f"오류 발생: {str(e)}")

# GUI 없이 실행할 경우 직접 함수 호출
if __name__ == "__main__":
    load_and_save_excel()