// {
//     public int Id { get; set; }
//     public string Email { get; set; }
//     public string Password { get; set; }
//     public string FirstName { get; set; }
//     public string LastName { get; set; }
    
//     // Navigation
//     public LinkedList<Order> Orders { get; set; }
// }

export interface User {
    id: number,
    email: string,
    firstName: string,
    lastName: string
}