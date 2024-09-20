using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Waini.Domain.Entities;

namespace Waini.Application.Interfaces
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAll();
        void Add(User user);
        void Update(User user);
        void Delete(int id);
    }
}
