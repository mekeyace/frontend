
public class Datatype {

	public static void main(String[] args) {
		//String : ���� "" ������ ���
		String a = "1234";
		System.out.println(a);
		/* ������ */
		byte b = 127;	//byte : -128~127
		System.out.println(b);
		
		short c = 32767;	//short : -32,768 ~ 32,767
		System.out.println(c);
		
		int d = 100000;	//int : -2,147,483,648 ~ 2,147,483,647
		System.out.println(d);
		
		long f = 99999899999L;	//long ���� ���� L ����ؾ���	
		//long 9,000,.... 18��	�⺻�޸� �Ҵ翡�� �߰������ ���ɹ����� �þ
		System.out.println(f);
		/* ������ �� */
		
		/* �Ǽ��� */
		float z = 3.5f;	//3.40248000000+38 (f�� ������ ��� �ؾ���)
		System.out.println(z);
		
		double k = 44.5178;	//1.784+308  (d�� ��/�� ��ε�)
		System.out.println(k);
		/* �Ǽ��� �� */
		
	}

}