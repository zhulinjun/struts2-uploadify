package net.itcast.action;

import java.util.Map;
/*import javax.servlet.ServletContext;*/
import javax.servlet.http.HttpServletRequest;
/*import javax.servlet.http.HttpServletResponse;*/
import javax.servlet.http.HttpSession;
import org.apache.struts2.ServletActionContext;
import net.itcast.exception.SystemException;
import net.itcast.model.User;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class RegisterAction extends ActionSupport
{
	private String username;
	private String password;
	private int age;
	/*---------------------------------------------*/
	private User user;
	/*---------------------------------------------*/
	private Map<String, Object> paramMap;

	public String propertyQuery() throws Exception
	{
		HttpServletRequest request = (HttpServletRequest) ActionContext.getContext().get(ServletActionContext.HTTP_REQUEST);
		/*HttpServletRequest request = ServletActionContext.getRequest();*/
		
		HttpSession session = request.getSession();
		/*ServletContext applicatioon = request.getSession().getServletContext();*/
		
		
		/*Map request = (Map) ActionContext.getContext().get("request");
		Map session = ActionContext.getContext().getSession();
		Map application = ActionContext.getContext().getApplication();*/
		
		
		/*HttpServletResponse response = ServletActionContext.getResponse();*/
		/*HttpServletResponse response = (HttpServletResponse) ActionContext.getContext().get(ServletActionContext.HTTP_RESPONSE);*/
		
		if ("".equals(username) || "".equals(password))
		{
			throw new SystemException("输入不合法");
		}
		else
		{
			request.setAttribute("username", username);
			request.setAttribute("password", password);
			
			/*session.put("user", username);*/
			session.setAttribute("user", username);
		}
		return "propertyQuery";
	}
	
	public String modelQuery() throws Exception
	{
		HttpServletRequest request = (HttpServletRequest) ActionContext.getContext().get(ServletActionContext.HTTP_REQUEST);
		/*HttpServletRequest request = ServletActionContext.getRequest();*/
		
		HttpSession session = request.getSession();
		/*ServletContext applicatioon = request.getSession().getServletContext();*/
		
		
		/*Map request = (Map) ActionContext.getContext().get("request");
		Map session = ActionContext.getContext().getSession();
		Map application = ActionContext.getContext().getApplication();*/
		
		if ("".equals(username) || "".equals(password))
		{
			throw new SystemException("输入不合法");
		}
		else
		{
			/*session.put("user", username);*/
			session.setAttribute("user", username);
		}
		return "modelQuery";
	}
	public String mapQuery() throws Exception
	{
		HttpServletRequest request = (HttpServletRequest) ActionContext.getContext().get(ServletActionContext.HTTP_REQUEST);
		/*HttpServletRequest request = ServletActionContext.getRequest();*/
		
		HttpSession session = request.getSession();
		/*ServletContext applicatioon = request.getSession().getServletContext();*/
		
		
		/*Map request = (Map) ActionContext.getContext().get("request");
		Map session = ActionContext.getContext().getSession();
		Map application = ActionContext.getContext().getApplication();*/
		
		if ("".equals(username) || "".equals(password))
		{
			throw new SystemException("输入不合法");
		}
		else
		{
			/*session.put("user", username);*/
			mapArrayToStr(paramMap);
			session.setAttribute("user", username);
		}
		return "mapQuery";
	}
	public static void mapArrayToStr(Map<String, Object> dataMap) {
		if (null != dataMap) {
			for (String st : dataMap.keySet()) {

				if (dataMap.get(st) instanceof String[]) {
					String[] array = (String[]) dataMap.get(st);
					if ("null".equals(array[0])) {
						dataMap.put(st, null);
					} else {
						dataMap.put(st, array[0]);
					}

				} else if (dataMap.get(st) instanceof String) {
					dataMap.put(st, dataMap.get(st));
				}

			}
		}
	}

	public String getUsername()
	{
		return username;
	}

	public void setUsername(String username)
	{
		this.username = username;
	}

	public String getPassword()
	{
		return password;
	}

	public void setPassword(String password)
	{
		this.password = password;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Map<String, Object> getParamMap() {
		return paramMap;
	}

	public void setParamMap(Map<String, Object> paramMap) {
		this.paramMap = paramMap;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

}
